import React from 'react';
import { InspectionItem, Condition } from '../types';

interface InspectionTableProps {
  items: InspectionItem[];
  onItemChange: (id: string, condition: Condition) => void;
  onImageChange: (id: string, file: File | null) => void;
}

const InspectionTable: React.FC<InspectionTableProps> = ({ items, onItemChange, onImageChange }) => {

  const handleConditionChange = (id: string, condition: Condition) => {
    onItemChange(id, condition);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-800 mb-4">Tabel Pemeriksaan Komponen</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-slate-200">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 border-b-2 border-slate-200">
            <tr>
              <th scope="col" className="px-4 py-3 w-[5%]">No.</th>
              <th scope="col" className="px-6 py-3 w-[30%]">Komponen yang Diperiksa</th>
              <th scope="col" className="px-6 py-3 text-center w-[25%]">Kondisi</th>
              <th scope="col" className="px-6 py-3 text-center w-[40%]">Gambar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="bg-white border-b border-slate-200 hover:bg-slate-50">
                <td className="px-4 py-4 font-medium text-slate-900 text-center">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-slate-800">{item.name}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`condition-${item.id}`}
                        checked={item.condition === Condition.BAIK}
                        onChange={() => handleConditionChange(item.id, Condition.BAIK)}
                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                      />
                      <span>Baik</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`condition-${item.id}`}
                        checked={item.condition === Condition.RUSAK_AUS}
                        onChange={() => handleConditionChange(item.id, Condition.RUSAK_AUS)}
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                      />
                      <span>Rusak/Aus</span>
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                    <div className="flex flex-col items-center justify-center space-y-2 w-full">
                        {item.image ? (
                        <>
                            <img src={item.image} alt={`Pratinjau ${item.name}`} className="w-48 h-36 object-cover rounded-md border-2 border-slate-200 shadow-sm" />
                            <button
                            onClick={() => onImageChange(item.id, null)}
                            className="text-xs text-red-500 hover:text-red-700 font-semibold transition"
                            >
                            Hapus Gambar
                            </button>
                        </>
                        ) : (
                        <>
                            <input
                            type="file"
                            accept="image/*"
                            id={`upload-${item.id}`}
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                onImageChange(item.id, e.target.files[0]);
                                }
                                // Reset value to allow re-uploading the same file
                                e.target.value = '';
                            }}
                            />
                            <label
                            htmlFor={`upload-${item.id}`}
                            className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-md transition border border-slate-300 shadow-sm"
                            >
                            Upload Gambar
                            </label>
                        </>
                        )}
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InspectionTable;