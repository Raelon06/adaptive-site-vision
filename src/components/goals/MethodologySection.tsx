
import React from "react";

const MethodologySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 font-serif">Hedef Belirleme Metodolojimiz</h2>
        <p className="text-lg text-gray-700 mb-6">
          PMI olarak, SMART (Specific, Measurable, Achievable, Relevant, Time-bound) hedef belirleme 
          metodolojisini benimsiyoruz. Bu yaklaşım sayesinde, net, ölçülebilir, ulaşılabilir, 
          ilgili ve zamana bağlı hedefler belirleyerek, performansımızı sürekli olarak izliyor ve 
          geliştiriyoruz.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Hedeflerimizi belirlerken, pazar koşullarını, müşteri beklentilerini ve şirket stratejilerimizi 
          göz önünde bulundurarak, gerçekçi ve aynı zamanda zorlayıcı hedefler belirliyoruz. 
          Bu hedefleri düzenli olarak gözden geçirerek, gerektiğinde güncelliyor ve sürekli iyileştirme 
          yaklaşımıyla çalışıyoruz.
        </p>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Hedef Belirleme" 
          className="rounded-lg shadow-xl" 
        />
      </div>
    </div>
  );
};

export default MethodologySection;
