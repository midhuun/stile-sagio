'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './about.css';
const About = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                } else {
                    el.classList.remove('visible');
                }
            });
        };
        handleScroll(); 
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 fade-in">About Us</h1>
            <p className="mb-4 fade-in">
                Welcome to <strong>STILE SAGIO</strong>, our premium brand dedicated to providing high-quality fashion that combines style, comfort, and sustainability. Located in the heart of Tirupur, a city renowned for its exceptional cotton production, we are proud to offer a diverse range of garments tailored to meet the needs of our clients. Our collection includes over 20 unique styles, from cotton vests to French terry joggers and hoodies.
            </p>

            {/* Our Commitment Section */}
            <section className="mt-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 fade-in">
                    <Image src="/images/commitment.jpg" alt="Our Commitment" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 fade-in">
                    <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                    <p className="mb-4">
                        At STILE SAGIO, we understand that every client has unique requirements. Our commitment is to customize products based on market standards while maintaining competitive pricing. We can produce garments in various compositions, including both cotton and polyester, ensuring that we meet your specific needs.
                    </p>
                </div>
            </section>

            {/* Quality Fabrics Section */}
            <section className="mt-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 fade-in">
                    <Image src="/images/fabrics.jpg" alt="Quality Fabrics" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 fade-in">
                    <h2 className="text-2xl font-semibold mb-4">Quality Fabrics</h2>
                    <ul className="list-disc pl-5 mb-4">
                        <li><strong>Cotton Loop Knit and Interlock:</strong> Available from 220 GSM to 350 GSM in 15+ shades, ideal for joggers, shorts, cord sets, hoodies, sweatshirts, and oversized t-shirts.</li>
                        <li><strong>Knitted Polyester Fabrics:</strong> Produced with wicking technology for breathability and comfort.</li>
                    </ul>
                </div>
            </section>

            {/* Versatile Activewear Section */}
            <section className="mt-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 fade-in">
                    <Image src="/images/activewear.jpg" alt="Versatile Activewear" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 fade-in">
                    <h2 className="text-2xl font-semibold mb-4">Versatile Activewear</h2>
                    <p className="mb-4">
                        Are you an active individual who enjoys working out or traveling? Our <strong>4-way stretch track pants</strong> are designed for ultimate flexibility—perfect for yoga, casual office wear, or lounging at home.
                    </p>
                </div>
            </section>

            {/* Custom Printing Options Section */}
            <section className="mt-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 fade-in">
                    <Image src="/images/printing.jpg" alt="Custom Printing Options" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 fade-in">
                    <h2 className="text-2xl font-semibold mb-4">Custom Printing Options</h2>
                    <p className="mb-4">Our printing team specializes in various techniques tailored to your needs:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>HD Printing</li>
                        <li>Foam Printing</li>
                        <li>Flock Printing</li>
                        <li>Non-PVC Plastisol Prints</li>
                    </ul>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="mt-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 fade-in">
                    <Image src="/images/contact.jpg" alt="Contact Us" width={600} height={400} className="rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8 fade-in">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        We invite you to reach out with your requirements. At STILE SAGIO, we are excited about the opportunity to collaborate with you and deliver exceptional products that exceed your expectations. Together, we can achieve great business success.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
