
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, X } from "lucide-react";

export const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Merhaba! Ben SGB Satış Destek Asistanı. Size nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate Gemini AI response
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const responses = [
        "Satış hedeflerinize ulaşmanız için size yardımcı olabilirim.",
        "SGB ekibimiz ile ilgili daha detaylı bilgi ana sayfamızda mevcuttur.",
        "2025 stratejilerimiz hakkında detaylı bilgilere menüden ulaşabilirsiniz.",
        "Size daha detaylı bilgi vermek için sorularınızı bekliyorum.",
        "Bu konuda size yardımcı olmak için ekip yöneticinizle görüşmenizi öneririm."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: randomResponse
      }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-brand-600 hover:bg-brand-700 z-40"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Chat interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl z-50 border border-gray-200">
          <CardHeader className="bg-brand-600 text-white py-3 px-4 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <h3 className="font-medium">SGB Asistan</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 rounded-full text-white hover:bg-brand-500/50"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.role === 'user'
                        ? 'bg-brand-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-100 rounded-lg px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-2 border-t">
            <div className="flex w-full items-center space-x-2">
              <Textarea
                placeholder="Mesajınızı yazın..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="min-h-10 resize-none"
                rows={1}
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon" 
                className="rounded-full h-9 w-9 shrink-0 bg-brand-600 hover:bg-brand-700"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
