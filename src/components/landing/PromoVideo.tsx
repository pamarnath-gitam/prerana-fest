import { motion } from "framer-motion";

export default function PromoVideo() {
  return (
    <section className="w-full py-12 md:py-20 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 bg-muted/20">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/oouLiRSEI1U?si=_NyHq_XwlWqfivja" 
              title="Prerana Fest 2026 Teaser" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
