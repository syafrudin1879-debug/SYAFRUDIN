import React, { useState } from 'react';
import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import BrakeDiagram from './components/BrakeDiagram';
import InspectionTable from './components/InspectionTable';
import PrintButton from './components/PrintButton';
import SubmissionInstructions from './components/SubmissionInstructions';
import { InspectionItem, Condition } from './types';
import { INITIAL_INSPECTION_ITEMS } from './constants';

// Deklarasi untuk pustaka yang dimuat dari CDN
declare const html2canvas: any;
declare const jspdf: any;

const App: React.FC = () => {
  const [items, setItems] = useState<InspectionItem[]>(INITIAL_INSPECTION_ITEMS);
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleItemChange = (id: string, newCondition: Condition) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, condition: newCondition } : item
      )
    );
  };

  const handleImageChange = (id: string, file: File | null) => {
    if (!file) {
      // Menangani penghapusan gambar
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, image: null } : item
        )
      );
      return;
    }

    // Menangani unggahan gambar
    const reader = new FileReader();
    reader.onloadend = () => {
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, image: reader.result as string } : item
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const handleSaveAsPdf = async () => {
    const printableArea = document.getElementById('printable-area');
    if (!printableArea) {
      console.error('Printable area not found!');
      return;
    }

    setIsGeneratingPdf(true);
    
    // Sembunyikan elemen yang tidak ingin dicetak
    const elementsToHide = printableArea.querySelectorAll('.no-pdf');
    elementsToHide.forEach((el: Element) => { (el as HTMLElement).style.display = 'none'; });

    try {
      const canvas = await html2canvas(printableArea, {
        scale: 2, // Skala lebih tinggi untuk kualitas gambar yang lebih baik
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const { jsPDF } = jspdf;
      
      // Menggunakan format A4 dalam orientasi potret
      const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: 'a4' });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      let imgWidth = pdfWidth - 20; // Margin 10px di setiap sisi
      let imgHeight = imgWidth / ratio;
      
      if (imgHeight > pdfHeight - 20) {
        imgHeight = pdfHeight - 20; // Margin 10px di atas & bawah
        imgWidth = imgHeight * ratio;
      }
      
      const x = (pdfWidth - imgWidth) / 2; // Pusatkan gambar secara horizontal
      const y = 10; // Margin atas

      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      
      const fileName = `LKPD Rem - ${studentName.trim() || 'Siswa'} - ${studentClass.trim() || 'Kelas'}.pdf`;
      pdf.save(fileName);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Gagal membuat PDF. Silakan coba lagi.");
    } finally {
      // Tampilkan kembali elemen yang disembunyikan
      elementsToHide.forEach((el: Element) => { (el as HTMLElement).style.display = ''; });
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <div className="container mx-auto p-4 md:p-8 max-w-5xl">
        <div id="printable-area" className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Header />
          <main className="p-6 md:p-8 space-y-8">
            <StudentInfo 
              studentName={studentName}
              studentClass={studentClass}
              onNameChange={setStudentName}
              onClassChange={setStudentClass}
            />
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <BrakeDiagram />
              </div>
              <div className="text-sm text-slate-600 space-y-2">
                <h3 className="text-lg font-bold text-slate-700 mb-2">Petunjuk Pengerjaan</h3>
                <p>1. Isilah Nama dan Kelas pada kolom yang tersedia.</p>
                <p>2. Amati dengan teliti setiap komponen rem cakram yang tertera pada tabel.</p>
                <p>3. Beri tanda centang (✓) pada kolom kondisi ("Baik" atau "Rusak/Aus") sesuai hasil pengamatan.</p>
                <p>4. Unggah foto kondisi komponen pada kolom "Gambar" untuk dokumentasi.</p>
                <p>5. Setelah selesai, ikuti petunjuk penyimpanan dan pengiriman di bawah tabel.</p>
              </div>
            </div>

            <InspectionTable items={items} onItemChange={handleItemChange} onImageChange={handleImageChange} />

            <div className="no-pdf">
                <SubmissionInstructions studentName={studentName} studentClass={studentClass} />
            </div>

            <div className="flex justify-end pt-4 no-pdf">
              <PrintButton onClick={handleSaveAsPdf} isLoading={isGeneratingPdf} />
            </div>
          </main>
        </div>
        <footer className="text-center py-6 text-sm text-slate-500">
          Dibuat untuk Praktik Teknik Kendaraan Ringan
        </footer>
      </div>
    </div>
  );
};

export default App;