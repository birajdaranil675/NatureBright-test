import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, FlaskConical, PackageCheck, Handshake,
  ShieldCheck, MapPin, Mail, Phone, Menu, MessageCircle, Sparkles
} from "lucide-react";

const products = [
  { name: "Toilet Cleaner", color: "blue", size: "250 ml · 500 ml · 1 L · 5 L", note: "Bathroom cleaning" },
  { name: "Floor Cleaner", color: "green", size: "250 ml · 500 ml · 1 L · 5 L", note: "Everyday floor care" },
  { name: "Glass Cleaner", color: "cyan", size: "250 ml · 500 ml · 1 L · 5 L", note: "Glass and surface care" },
  { name: "Dishwash", color: "yellow", size: "250 ml · 500 ml · 1 L · 5 L", note: "Dishwashing liquid" },
  { name: "Hand Wash", color: "pink", size: "250 ml · 500 ml · 1 L · 5 L", note: "Hand-cleaning solution" },
  { name: "Car Wash", color: "navy", size: "250 ml · 500 ml · 1 L · 5 L", note: "Vehicle cleaning" },
  { name: "Phenyl", color: "white", size: "250 ml · 500 ml · 1 L · 5 L", note: "Floor-cleaning solution" }
];

const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Nature Bright Industries, I would like to enquire about your cleaning products.")}` : "#contact";

function Bottle({ color, hero = false }: { color: string; hero?: boolean }) {
  return <div className={`bottle bottle-${color} ${hero ? "bottle-hero" : ""}`} aria-hidden="true">
    <span className="bottle-cap" /><span className="bottle-neck" /><span className="bottle-body" />
    <span className="bottle-label"><i /><b>NATURE<br/>BRIGHT</b><small>ILLUSTRATIVE</small></span>
  </div>;
}

function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Nature Bright Industries home">
      <Image src="/images/nature-bright-logo.jpg" alt="Nature Bright Industries" width={250} height={115} priority />
    </Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      <a className="active" href="#home">Home</a><a href="#about">About Us</a><a href="#products">Products <span>⌄</span></a><a href="#quality">Quality &amp; Certifications</a><a href="#contact">Contact Us</a>
    </nav>
    <a className="header-cta" href={whatsappHref} target={waNumber ? "_blank" : undefined} rel="noreferrer"><MessageCircle size={17}/> WhatsApp Us</a>
    <details className="mobile-menu-wrap">
      <summary className="mobile-menu" aria-label="Open navigation menu"><Menu/></summary>
      <nav className="mobile-nav"><a href="#home">Home</a><a href="#about">About Us</a><a href="#products">Products</a><a href="#quality">Quality</a><a href="#contact">Contact</a></nav>
    </details>
  </header>;
}

export default function HomePage() {
  return <main>
    <Header/>
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><Sparkles size={15}/> CLEANING SOLUTIONS FOR EVERY SPACE</span>
        <h1>A Brighter Clean<br/><em>Starts Here.</em></h1>
        <p>Quality cleaning solutions for homes, businesses and institutions.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#products">Explore Products <ArrowRight size={17}/></a><a className="btn btn-outline" href="#contact"><MessageCircle size={17}/> Get a Quote</a></div>
        <div className="hero-proof"><span><CheckCircle2/> Multiple product solutions</span><span><CheckCircle2/> Flexible pack sizes</span></div>
      </div>
      <div className="hero-art" aria-label="Illustrative cleaning product bottles">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="hero-leaf leaf-one">✦</div><div className="hero-leaf leaf-two">✦</div>
        <div className="hero-bottles"><Bottle color="blue" hero/><Bottle color="green" hero/><Bottle color="cyan" hero/><Bottle color="yellow" hero/><Bottle color="pink" hero/></div>
        <div className="hero-splash"/>
        <span className="image-note">Illustrative packaging · actual product photos coming soon</span>
      </div>
    </section>

    <section className="section products-section" id="products">
      <div className="section-heading"><span className="section-kicker">OUR RANGE</span><h2>Our <em>Cleaning Solutions</em></h2><p>Explore our range of cleaning products for homes, shops and professional spaces.</p></div>
      <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}>
        <div className="product-visual"><Bottle color={product.color}/><span className="product-tag">PRODUCT IMAGE PLACEHOLDER</span></div>
        <div className="product-info"><div><h3>{product.name}</h3><p>{product.note}</p><small>{product.size}</small></div><a href={whatsappHref} aria-label={`Enquire about ${product.name}`} target={waNumber ? "_blank" : undefined} rel="noreferrer"><ArrowRight size={18}/></a></div>
      </article>)}</div>
      <div className="center-action"><a className="text-link" href="#contact">Enquire about our products <ArrowRight size={17}/></a></div>
    </section>

    <section className="why-strip" id="quality">
      <div className="why-intro"><span className="section-kicker">THE NATURE BRIGHT PROMISE</span><h2>Why Choose<br/><em>Nature Bright?</em></h2><p>Practical cleaning solutions with a customer-first approach.</p></div>
      <div className="why-item"><ShieldCheck/><b>Quality-focused<br/>products</b></div>
      <div className="why-item"><FlaskConical/><b>Multiple cleaning<br/>solutions</b></div>
      <div className="why-item"><PackageCheck/><b>Flexible packaging<br/>options</b></div>
      <div className="why-item"><Handshake/><b>Business<br/>partnerships</b></div>
    </section>

    <section className="about-section section" id="about">
      <div className="about-photo"><div className="factory-placeholder"><div className="factory-sky"/><div className="factory-building"><span/><span/><span/><span/><span/><span/></div><div className="factory-caption">NATURE BRIGHT INDUSTRIES <small>MANUFACTURING FACILITY IMAGE PLACEHOLDER</small></div></div></div>
      <div className="about-copy"><span className="section-kicker">ABOUT OUR COMPANY</span><h2>Cleaning solutions for a <em>brighter tomorrow.</em></h2><p>Nature Bright Industries is a cleaning-products business based in Ausa, Maharashtra. We aim to serve retailers, wholesalers, hotels, restaurants and institutions with a range of everyday cleaning solutions.</p><a className="btn btn-primary" href="#contact">Connect With Us <ArrowRight size={17}/></a></div>
    </section>

    <section className="bulk-cta">
      <div><span className="section-kicker light">FOR RETAILERS &amp; INSTITUTIONS</span><h2>Looking for reliable<br/><em>cleaning product supply?</em></h2><p>Let’s discuss your product and bulk requirements.</p></div>
      <a className="btn btn-light" href="#contact">Request a Bulk Quote <ArrowRight size={17}/></a>
      <div className="cta-decor"><Bottle color="cyan"/><Bottle color="green"/><Bottle color="white"/></div>
    </section>

    <section className="contact-section section" id="contact">
      <div className="section-heading"><span className="section-kicker">LET’S CONNECT</span><h2>How can we <em>help you?</em></h2><p>Contact us for product details, samples and business quotations.</p></div>
      <div className="contact-grid">
        <div className="contact-card"><MapPin/><div><b>Visit us</b><p>Nature Bright Industries, Holkar Nagar,<br/>Opp. Police Quarter, Ausa,<br/>Maharashtra – 413520</p></div></div>
        <div className="contact-card"><Mail/><div><b>Email us</b><a href="mailto:naturebrightindustries123@gmail.com">naturebrightindustries123@gmail.com</a></div></div>
        <div className="contact-card"><MessageCircle/><div><b>WhatsApp enquiries</b><p>Message us about products and quotations.</p><a href={whatsappHref} target={waNumber ? "_blank" : undefined} rel="noreferrer">{waNumber ? "Start a WhatsApp chat" : "WhatsApp number to be confirmed"}</a></div></div>
      </div>
      <div className="map-placeholder"><MapPin/><span>Map embed will be added after confirming the exact business pin location.</span></div>
    </section>

    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand"><Image src="/images/nature-bright-logo.jpg" alt="Nature Bright Industries" width={210} height={100}/><p>Quality Cleaning Solutions.<br/>Brighter Spaces.</p></div>
        <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#products">Products</a><a href="#quality">Quality &amp; Certifications</a><a href="#contact">Contact Us</a></div>
        <div><h4>Contact Us</h4><p><MapPin size={15}/> Holkar Nagar, Opp. Police Quarter,<br/>Ausa, Maharashtra – 413520</p><p><Mail size={15}/> naturebrightindustries123@gmail.com</p></div>
        <div><h4>Business Enquiries</h4><p>For product samples, bulk orders and quotations, contact our team.</p><a className="footer-button" href="#contact">Get in touch <ArrowRight size={15}/></a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Nature Bright Industries. All rights reserved.</span><span>Designed for a cleaner tomorrow.</span></div>
    </footer>
  </main>;
}