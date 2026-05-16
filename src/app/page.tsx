"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { CheckCircle, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarLayoutFloatingInline
              navItems={[
                { name: "Home", id: "hero" },
                { name: "Products", id: "catalog" },
                { name: "Features", id: "features" },
                { name: "Contact", id: "contact" },
              ]}
              brandName="PrintStudio"
              button={{ text: "Login" }}
            />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardTestimonial
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            title="Bring Your Creative Ideas to Life"
            description="Personalize premium products with your photos, text, and unique style. Fast delivery, exceptional quality."
            testimonials={[
              { name: "Alice Chen", handle: "@alice", testimonial: "The customization tool is incredibly intuitive. My hoodie turned out perfectly!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/elegant-blonde-girl-beige-attire-standing-laughing-african-guy-outdoor-photo-chilling-black-man-headphones-relaxing-street_197531-21805.jpg" },
              { name: "Marcus J.", handle: "@mj_designer", testimonial: "High quality print and very fast shipping. Will order again.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-pretty-mulatto-woman-with-trendy-make-up-standing-with-arms-crossed-office-indoor-photo-female-black-employee-posing-with-international-colleagues-gently-smile_197531-3788.jpg" },
              { name: "Sarah W.", handle: "@sarahw", testimonial: "Finally a platform that lets me design exactly what I need.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-being-interviewed_23-2148524077.jpg" },
              { name: "David L.", handle: "@dl_gifts", testimonial: "Gifts for my team were amazing. Seamless process.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-charming-sensual-girl-stands-leaning-against-brick-wal_613910-14420.jpg" },
              { name: "Emily R.", handle: "@emily", testimonial: "Excellent user experience for custom mug design. Totally recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-african-man-headphones-smiling-holding-tablet_176420-12578.jpg" },
            ]}
            buttons={[{ text: "Shop Now", href: "#catalog" }]}
            imageSrc="http://img.b2bpic.net/free-photo/top-view-male-self-care-items_23-2150347104.jpg"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/diverse-people-discussing-about-fashion-trends-assortments-retail-store_482257-109853.jpg", alt: "Happy customer 1" },
              { src: "http://img.b2bpic.net/free-photo/front-view-smiley-women-show_23-2149943749.jpg", alt: "Happy customer 2" },
              { src: "http://img.b2bpic.net/free-photo/authentic-small-youthful-marketing-agency_23-2150167407.jpg", alt: "Happy customer 3" },
              { src: "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205442.jpg", alt: "Happy customer 4" },
              { src: "http://img.b2bpic.net/free-photo/people-working-as-team-company_23-2149136890.jpg", alt: "Happy customer 5" },
            ]}
            avatarText="Trusted by 5,000+ creators"
            marqueeItems={[
              { type: "text", text: "Premium Quality" },
              { type: "text", text: "Eco-friendly Materials" },
              { type: "text", text: "Global Shipping" },
              { type: "text", text: "Seamless Design" },
              { type: "text", text: "Real-time Preview" },
            ]}
          />
        </div>

        <div id="catalog" data-section="catalog">
          <ProductCatalog
            layout="section"
            products={[
              { id: "p1", name: "Classic Mug", price: "$15.99", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=o246u6" },
              { id: "p2", name: "Premium Hoodie", price: "$45.99", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rct9mv" },
              { id: "p3", name: "Custom T-Shirt", price: "$22.99", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/modern-logo-with-hexagon-red-purple_698780-1043.jpg" },
              { id: "p4", name: "Travel Bottle", price: "$19.99", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/gradient-technology-logo-collection_23-2148162307.jpg" },
              { id: "p5", name: "Smartphone Case", price: "$25.99", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=r1601d" },
              { id: "p6", name: "Sticker Pack", price: "$9.99", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lwsstl" },
            ]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardSix
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { title: "Add Personalized Text", description: "Choose fonts, colors, and layout in seconds.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345419.jpg" },
              { title: "Upload Your Photos", description: "Drag and drop your images onto products effortlessly.", imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320719.jpg" },
              { title: "Real-time Preview", description: "See your unique design updates live before you order.", imageSrc: "http://img.b2bpic.net/free-photo/process-creating-stand-up-comedy_23-2151058841.jpg" },
            ]}
            title="Simple Design, Pro Results"
            description="Our intuitive tools make product personalization easy for everyone."
          />
        </div>

        <div id="social" data-section="social">
            <SocialProofOne
              textboxLayout="default"
              useInvertedBackground={false}
              names={["TechCorp", "DesignLab", "CreativeFlow", "ModernPrint", "GrowthStudio", "ArtfulGoods", "PixelPerfect"]}
              title="Trusted by Creators Everywhere"
              description="Join thousands of satisfied customers who love our products."
            />
        </div>

        <div id="metrics" data-section="metrics">
            <MetricCardOne
              animationType="slide-up"
              textboxLayout="split"
              gridVariant="uniform-all-items-equal"
              useInvertedBackground={false}
              metrics={[
                { id: "m1", value: "50K+", title: "Products Printed", description: "Creative designs brought to life.", icon: Sparkles },
                { id: "m2", value: "98%", title: "Satisfaction Rate", description: "Customers who love their designs.", icon: CheckCircle },
                { id: "m3", value: "24/7", title: "Support Available", description: "Always here to help you design.", icon: Shield },
              ]}
              title="Our Impact in Numbers"
              description="We are proud of our commitment to quality and creativity."
            />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardOne
              animationType="slide-up"
              textboxLayout="split"
              gridVariant="two-columns-alternating-heights"
              useInvertedBackground={false}
              testimonials={[
                { id: "t1", name: "Alice C.", role: "Designer", company: "Tech", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-smiling_93675-133804.jpg" },
                { id: "t2", name: "Marcus J.", role: "Lead", company: "Studio", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg" },
                { id: "t3", name: "Sarah W.", role: "Director", company: "Creative", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-red-haired-man_158595-3776.jpg" },
                { id: "t4", name: "David L.", role: "Manager", company: "GiftCo", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/view-woman-black-smiling-looking-away_197531-33113.jpg" },
                { id: "t5", name: "Emily R.", role: "Marketing", company: "Startups", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/happy-photo-editor-browsing-through-images-determine-most-appropriate-visuals_482257-82203.jpg" },
              ]}
              title="Hear From Our Community"
              description="Real stories from people who transformed their ideas into reality."
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqSplitText
              useInvertedBackground={false}
              faqs={[
                { id: "f1", title: "How long does shipping take?", content: "Orders typically arrive within 3-5 business days." },
                { id: "f2", title: "Can I return customized products?", content: "Since products are personalized, returns are limited to manufacturing defects." },
                { id: "f3", title: "Do you offer bulk discounts?", content: "Yes, contact our sales team for orders over 50 items." },
              ]}
              sideTitle="Frequently Asked Questions"
              sideDescription="Everything you need to know about customizing and ordering."
              faqsAnimation="slide-up"
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplitForm
              useInvertedBackground={false}
              title="Need Help Designing?"
              description="Our team is ready to assist you with your project."
              inputs={[
                { name: "name", type: "text", placeholder: "Your Name", required: true },
                { name: "email", type: "email", placeholder: "Your Email", required: true },
              ]}
              textarea={{ name: "message", placeholder: "Tell us about your needs..." }}
              imageSrc="http://img.b2bpic.net/free-photo/high-angle-beautiful-plants-indoors_23-2149383635.jpg"
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterSimple
              columns={[
                { title: "Shop", items: [{ label: "Mugs", href: "#catalog" }, { label: "Hoodies", href: "#catalog" }] },
                { title: "Company", items: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }] },
                { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
              ]}
              bottomLeftText="© 2024 PrintStudio. All rights reserved."
              bottomRightText="Built for Creators."
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
