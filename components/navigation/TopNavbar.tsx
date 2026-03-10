'use client';

import { Phone, Mail, Clock } from 'lucide-react';

export function TopNavbar() {
  return (
    <div className="bg-blue-900 text-white text-sm py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+216 98 567 372</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>maitreagoubiissam@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Lun-Ven: 09h00-18h00</span>
          </div>
        </div>
      </div>
    </div>
  );
}