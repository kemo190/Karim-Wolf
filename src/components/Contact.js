function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me 📞</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://wa.me/+201097426151"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/share/19vCYYFHDz/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
          >
            Facebook
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  