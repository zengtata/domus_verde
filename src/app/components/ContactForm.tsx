'use client';
import React, { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Reveal from './Reveal';

export default function ContactSection() {
    const [token, setToken] = useState<string | null>(null);
    const captchaRef = useRef<HCaptcha>(null);

    const onExpire = () => {
        setToken(null);
    };

    const onVerify = (token: string) => {
        setToken(token);
    };

    return (
        <section id="contact" className="py-24">
            <div className="container max-w-3xl mx-auto px-6">
                <Reveal className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">Vegye fel velünk a kapcsolatot</h2>
                    <p className="text-text-muted">Készen áll, hogy megvalósítsuk álmai kertjét?</p>
                </Reveal>

                <Reveal className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
                    <form action="https://api.web3forms.com/submit" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Configuration */}
                        <input type="hidden" name="access_key" value="bea8eebb-7058-46c9-9aa8-fe466ea9d88e" />
                        <input type="hidden" name="from_name" value="Domus Verde Website" />
                        <input type="hidden" name="subject" value="Új Ügyfél Megkeresés" />

                        {/* IMPORTANT: Do NOT add a manual input for h-captcha-response here.
                The <HCaptcha> component below adds it automatically.
                Adding it manually causes the "Duplicate Token" error. */}

                        {/* Form Fields */}
                        <div className="md:col-span-2">
                            <input type="text" name="name" placeholder="Teljes Név" required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />
                        </div>

                        <input type="email" name="email" placeholder="E-mail cím" required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />
                        <input type="tel" name="phone" placeholder="Telefonszám" required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />

                        <div className="md:col-span-2 grid grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <input type="text" name="postcode" placeholder="Irsz." required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />
                            </div>
                            <div className="col-span-2">
                                <input type="text" name="city" placeholder="Település" required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />
                            </div>
                        </div>

                        <div className="md:col-span-2">
                            <input type="text" name="address" placeholder="Utca, házszám" required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors" />
                        </div>

                        <textarea name="message" placeholder="A projekt rövid leírása..." required className="w-full p-4 border border-gray-200 rounded focus:outline-none focus:border-accent-gold transition-colors md:col-span-2 min-h-[150px]"></textarea>

                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        {/* Footer */}
                        <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6 mt-4">

                            {/* HCaptcha */}
                            <div className="transform scale-90 md:scale-100 origin-left">
                                <HCaptcha
                                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    onVerify={onVerify}
                                    onExpire={onExpire}
                                    ref={captchaRef}
                                    reCaptchaCompat={false} /* <--- FIX: Disables the Google field causing the Pro error */
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!token}
                                className={`px-10 py-4 rounded-full uppercase tracking-wider font-medium transition-all shadow-lg w-full md:w-auto ${token ? 'bg-accent-gold text-white hover:bg-[#a18a5e] hover:-translate-y-1' : 'bg-[#B49B6C]/50 text-white cursor-not-allowed'}`}
                            >
                                Küldés
                            </button>
                        </div>

                    </form>
                </Reveal>
            </div>
        </section>
    );
}