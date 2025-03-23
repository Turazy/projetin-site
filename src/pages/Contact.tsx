
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Mock API call - in a real app, this would send data to your backend
      setTimeout(() => {
        toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-corpus-silver/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-corpus-text-dark mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-corpus-text-dark/80">
              Estamos à disposição para atender suas dúvidas, fornecer informações sobre nossos produtos e apresentar soluções personalizadas para seu laboratório.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-corpus-text-dark mb-6">
              Informações de Contato
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-corpus-blue/10 rounded-full mr-4">
                  <Phone size={24} className="text-corpus-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-corpus-text-dark mb-1">Telefone</h3>
                  <p className="text-corpus-text-dark/80">
                    <a href="tel:+551112345678" className="hover:text-corpus-blue transition-colors">
                      (11) 1234-5678
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-corpus-blue/10 rounded-full mr-4">
                  <Mail size={24} className="text-corpus-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-corpus-text-dark mb-1">Email</h3>
                  <p className="text-corpus-text-dark/80">
                    <a href="mailto:contato@corpuscomercio.com.br" className="hover:text-corpus-blue transition-colors">
                      contato@corpuscomercio.com.br
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-corpus-blue/10 rounded-full mr-4">
                  <MapPin size={24} className="text-corpus-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-corpus-text-dark mb-1">Endereço</h3>
                  <p className="text-corpus-text-dark/80">
                    Av. Exemplo, 1234<br />
                    São Paulo, SP, 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-corpus-blue/10 rounded-full mr-4">
                  <Clock size={24} className="text-corpus-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-corpus-text-dark mb-1">Horário de Atendimento</h3>
                  <p className="text-corpus-text-dark/80">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-64 w-full">
              <iframe 
                title="Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.034779222163!2d-46.669557372796816!3d-23.557024937061018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1657030946374!5m2!1spt-BR!2sbr"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-corpus-text-dark mb-6">
              Envie-nos uma Mensagem
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-corpus-text-dark font-medium mb-2">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-corpus-text-dark font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-corpus-text-dark font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50"
                    placeholder="(11) 98765-4321"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-corpus-text-dark font-medium mb-2">
                    Empresa / Instituição
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50"
                    placeholder="Nome da empresa"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-corpus-text-dark font-medium mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50 appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23999999\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Orçamento">Solicitar Orçamento</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Informações sobre Produtos">Informações sobre Produtos</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-corpus-text-dark font-medium mb-2">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-corpus-blue/50 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
              </div>
              
              <AnimatedButton
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send size={20} />}
                iconPosition="right"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </AnimatedButton>
            </form>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-container py-16 bg-corpus-silver/10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="inline-block bg-corpus-blue/10 text-corpus-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
            Perguntas Frequentes
          </span>
          <h2 className="section-title">Dúvidas Comuns</h2>
          <p className="section-subtitle">
            Respostas para as perguntas mais frequentes sobre nossos produtos e serviços.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Como solicitar um orçamento?",
              answer: "Você pode solicitar um orçamento preenchendo o formulário de contato nesta página, enviando um e-mail para contato@corpuscomercio.com.br ou ligando para (11) 1234-5678."
            },
            {
              question: "Vocês oferecem suporte técnico para os equipamentos?",
              answer: "Sim, oferecemos suporte técnico especializado para todos os equipamentos comercializados. Nossa equipe está disponível para auxiliar na instalação, configuração e manutenção dos produtos."
            },
            {
              question: "Qual o prazo de entrega dos produtos?",
              answer: "O prazo de entrega varia de acordo com o produto e sua localização. Produtos em estoque geralmente são entregues em 5 a 10 dias úteis. Para produtos importados ou sob encomenda, o prazo pode ser de 30 a 60 dias."
            },
            {
              question: "Vocês atendem a todo o Brasil?",
              answer: "Sim, atendemos a todo o território nacional, com entrega para todas as regiões do Brasil. Para localidades mais remotas, o prazo de entrega pode ser maior."
            },
            {
              question: "Os produtos possuem garantia?",
              answer: "Todos os nossos produtos possuem garantia contra defeitos de fabricação. O período de garantia varia de acordo com o fabricante, sendo geralmente de 12 meses a partir da data de emissão da nota fiscal."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="mb-4 glass-card overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-corpus-text-dark pr-8">{item.question}</h3>
                  <div className="text-corpus-blue transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown size={20} />
                  </div>
                </summary>
                <div className="p-6 pt-0 text-corpus-text-dark/80">
                  <p>{item.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
