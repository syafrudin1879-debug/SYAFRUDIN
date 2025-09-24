
import React from 'react';

interface StudentInfoProps {
    studentName: string;
    studentClass: string;
    onNameChange: (name: string) => void;
    onClassChange: (className: string) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ studentName, studentClass, onNameChange, onClassChange }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 p-6 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="group">
          <label htmlFor="studentName" className="block text-sm font-medium text-slate-600 mb-1">Nama Siswa</label>
          <input 
            type="text" 
            id="studentName"
            value={studentName}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Masukkan nama lengkap..."
          />
        </div>
        <div className="group">
          <label htmlFor="studentClass" className="block text-sm font-medium text-slate-600 mb-1">Kelas</label>
          <input 
            type="text" 
            id="studentClass"
            value={studentClass}
            onChange={(e) => onClassChange(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Contoh: XII TKR 1"
          />
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2 px-1">
          *Isi nama dan kelas dengan benar untuk penamaan file PDF.
      </p>
    </div>
  );
};

export default StudentInfo;
