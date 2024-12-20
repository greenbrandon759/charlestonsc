import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Charleston Guide</h3>
            <p className="text-gray-400">Your comprehensive guide to exploring the best of Charleston, South Carolina.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="/historic-district" className="text-gray-400 hover:text-white">Historic District</Link></li>
              <li><Link href="/folly-beach" className="text-gray-400 hover:text-white">Folly Beach</Link></li>
              <li><Link href="/magnolia-plantation" className="text-gray-400 hover:text-white">Magnolia Plantation</Link></li>
              <li><Link href="/market-street" className="text-gray-400 hover:text-white">Market Street</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-gray-400">info@charlestonguide.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-gray-400">(843) 555-0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="text-gray-400">Charleston, SC 29401</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Charleston Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}