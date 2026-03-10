export function GoogleMap() {
  return (
    <section className="h-96 bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d828.0346579964994!2d10.091333299999999!3d33.886083299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUzJzA5LjkiTiAxMMKwMDUnMjguOCJF!5e0!3m2!1sen!2stn!4v1756983090451!5m2!1sen!2stn"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation du Cabinet Agoubi Issam"
        className="w-full h-full"
      />
    </section>
  );
}
