function Location() {
  return (
    <section className="location-section">
      <h3>Location</h3>
      <div className="map-shop">
        <span className="map">
          <iframe
            title="map"
            className="map-img"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.9452350170786!2d78.77044371462267!3d30.15298172039295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a46c8c2f6857%3A0x9183e1bbd486352c!2sAgency%20Chowk%2C%20Pauri%2C%20Uttarakhand%20246001!5e0!3m2!1sen!2sin!4v1628357083516!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </span>
        <span className="shop">
          <img
            className="shop-img"
            src="https://media.businessex.com/subCatImages/54/1000_x_562/shutterstock_390599908.jpg"
            alt="medicine-shop"
          />
        </span>
      </div>
    </section>
  );
}

export default Location;
