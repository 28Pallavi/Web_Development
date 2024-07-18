import React from 'react';

const guests = [
  { id: '#5644', name: 'Alexander', room: 'A647', total: '$467', paid: '$200', status: 'Clean' },
  { id: '#6112', name: 'Anurag', room: 'A456', total: '$645', paid: '$250', status: 'Dirty' },
  { id: '#6141', name: 'Lakshya', room: 'A645', total: '$686', paid: '$400', status: 'Dirty' },
  { id: '#6535', name: 'Mayank', room: 'A684', total: '$8413', paid: '$2500', status: 'Inspected' },
  { id: '#6541', name: 'Rahul', room: 'B464', total: '$841', paid: '$400', status: 'Clean' },
  { id: '#9846', name: 'Shivi', room: 'C648', total: '$684', paid: '$300', status: 'Clean' },
  { id: '#4921', name: 'Arya', room: 'D644', total: '$984', paid: '$513', status: 'Pick up' },
  { id: '#4921', name: 'Shriya', room: 'D644', total: '$984', paid: '$513', status: 'Pick up' },
  { id: '#9841', name: 'Ishi', room: 'B641', total: '$984', paid: '$600', status: 'Dirty' },
  { id: '#9841', name: 'Tia', room: 'B641', total: '$984', paid: '$600', status: 'Dirty' },
];

const GuestTable = () => {
  return (
    <>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Reservation ID</th>
            <th className="border border-gray-200 p-2">Name</th>
            <th className="border border-gray-200 p-2">Room Number</th>
            <th className="border border-gray-200 p-2">Total Amount</th>
            <th className="border border-gray-200 p-2">Amount Paid</th>
            <th className="border border-gray-200 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id}>
              <td className="border border-gray-200 p-2">{guest.id}</td>
              <td className="border border-gray-200 p-2">{guest.name}</td>
              <td className="border border-gray-200 p-2">{guest.room}</td>
              <td className="border border-gray-200 p-2">{guest.total}</td>
              <td className="border border-gray-200 p-2">{guest.paid}</td>
              <td className="border border-gray-200 p-2">
                <span
                  className={`px-2 py-1 rounded ${
                    guest.status === 'Clean'
                      ? 'bg-blue-100 text-blue-800'
                      : guest.status === 'Dirty'
                      ? 'bg-red-100 text-red-800'
                      : guest.status === 'Inspected'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {guest.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination UI */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-outline-secondary me-2">Previous</button>
        {[1, 2, 3, 4, 5, 6, 7].map(number => (
          <button key={number} className="btn btn-outline-primary me-1">
            {number}
          </button>
        ))}
        <button className="btn btn-outline-secondary ms-2">Next</button>
      </div>
    </>
  );
}

export default GuestTable;
