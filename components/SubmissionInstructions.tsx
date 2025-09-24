
import React from 'react';

interface SubmissionInstructionsProps {
    studentName: string;
    studentClass: string;
}

const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const SubmissionInstructions: React.FC<SubmissionInstructionsProps> = ({ studentName, studentClass }) => {
    const fileName = `LKPD Rem - ${studentName.trim() || '[Nama Siswa]'} - ${studentClass.trim() || '[Kelas]'}.pdf`;

    return (
        <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md my-8 no-print" role="alert">
            <div className="flex items-start">
                <div className="py-1">
                   <InfoIcon />
                </div>
                <div className="ml-3">
                    <p className="text-lg font-bold mb-2">Langkah Selanjutnya: Simpan dan Kirim</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Setelah semua komponen diperiksa, klik tombol <strong>"Cetak / Simpan PDF"</strong> di bawah.</li>
                        <li>Pada jendela dialog yang muncul, pilih tujuan cetak ke <strong>"Save as PDF"</strong> atau "Simpan sebagai PDF".</li>
                        <li>Simpan file dengan nama berikut untuk memudahkan guru memeriksa:
                            <div className="bg-blue-100 text-blue-900 font-mono text-xs px-2 py-1 rounded my-1 break-all">
                                {fileName}
                            </div>
                        </li>
                        <li>Kirimkan file PDF yang sudah disimpan kepada guru melalui media yang telah ditentukan (misal: Google Classroom, WhatsApp, atau Email).</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SubmissionInstructions;
