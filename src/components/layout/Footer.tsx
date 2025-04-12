
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold text-white">PMI</h2>
            </Link>
            <p className="text-gray-300 mb-4">
              Premium bir hizmet kalitesi ile sektörün lider firmalarından biri olarak, müşterilerimize en iyi hizmeti sunmak için her zaman çalışıyoruz.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">Biz Kimiz</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Ekibimiz</Link>
              </li>
              <li>
                <Link to="/2025" className="text-gray-300 hover:text-white transition-colors">2025</Link>
              </li>
              <li>
                <Link to="/goals-results" className="text-gray-300 hover:text-white transition-colors">Hedefler & Sonuçlar</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Diğer Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/coaching" className="text-gray-300 hover:text-white transition-colors">Koçluk</Link>
              </li>
              <li>
                <Link to="/ai-news" className="text-gray-300 hover:text-white transition-colors">Yapay Zeka</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white transition-colors">Eğitim</Link>
              </li>
              <li>
                <a href="https://www.pmi.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">PMI Global</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-brand-400" />
                <span className="text-gray-300">PMI Merkez Ofisi, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-400" />
                <span className="text-gray-300">+90 555 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-400" />
                <span className="text-gray-300">info@pmi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-6">&copy; {new Date().getFullYear()} PMI. Tüm hakları saklıdır.</p>
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/53a20f65-54c2-4350-b9fb-a889e4e65767.png" 
              alt="THE REDS" 
              className="h-10 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

