import React from 'react';
import ImageCard from './components/ImageCard';
import ImageGrid from './components/ImageGrid';
import GlobalStyles from './styles/GlobalStyles';

const headerImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0174efa1d1a3a74e7510fde7486f7d89eb4f08101f317e011a19eb61737d9adf?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Car service header image 1", className: "header-image" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/420c46d46f402ee3d11d22a695f5211f96f9d44febf93d1b8e370d2d86c49140?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Car service header image 2", className: "header-image-secondary" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cac81caccc0cd65d86f3bfeaf20b1fa54e41efc1855df235130e3c99124b694?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Car service header image 3", className: "header-image-tertiary" }
];

const serviceImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/098e52ca493c5719f9702661dab5724ae7a0d596ad5714ae650c820fa9eccafe?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Service type 1", className: "service-image" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/307746fcf6e8ce15c160b85e8437cfe8b67e9fd90872ba8412d5975c51cb1afd?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Service type 2", className: "service-image" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/13be2fcf7c93e5a494e1a8f516b1ccbf1bbd7d55e113851377a512a78ae75227?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745", alt: "Service type 3", className: "service-image" }
];

function CarServiceLayout() {
  return (
    <>
      <GlobalStyles />
      <main className="layout-container">
        <header className="header-section">
          <ImageGrid images={headerImages} />
          <div className="service-images">
            <ImageGrid images={serviceImages} />
          </div>
        </header>

        <section className="content-section">
          <div className="service-grid">
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eedf58720f3386eef15eb4baefb6d2ab2515b0dbf5a76d6106f481ebf5be45f?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745"
              alt="Service feature 1"
              className="feature-image"
            />
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19e871832a8f025635bdd9306df5f1c34693cae9b613e343178652846a1dd99?placeholderIfAbsent=true&apiKey=cda5ed907be84c1fa3bb502fe86e8745"
              alt="Service feature 2" 
              className="feature-image-secondary"
            />
          </div>
        </section>

        <section className="brand-section">
          <h1 className="brand-title">We Service All Makes & Models!</h1>
          <div className="brand-images">
            {[...Array(42)].map((_, i) => (
              <ImageCard
                key={i}
                src={`http://b.io/ext_${i + 1}-`}
                alt={`Car brand ${i + 1}`}
                className="brand-logo"
              />
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        .layout-container {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-items: end;
          padding: 0 20px 52px;
        }

        .header-section {
          margin-right: 128px;
          width: 890px;
          max-width: 100%;
        }

        .header-image {
          aspect-ratio: 1.88;
          object-fit: contain;
          object-position: center;
          width: 282px;
          align-self: end;
          max-width: 100%;
        }

        .header-image-secondary {
          aspect-ratio: 0.78;
          object-fit: contain;
          object-position: center;
          width: 137px;
          align-self: center;
          z-index: 10;
          max-width: 100%;
          margin: -66px 0 0 10px;
        }

        .header-image-tertiary {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 175px;
          align-self: end;
          z-index: 10;
          max-width: 100%;
          margin: -43px 163px 0 0;
        }

        .service-images {
          display: flex;
          margin-top: -316px;
          width: 241px;
          max-width: 100%;
          flex-direction: column;
        }

        .service-image {
          aspect-ratio: 0.83;
          object-fit: contain;
          object-position: center;
          width: 146px;
          align-self: end;
          max-width: 100%;
          margin-top: 83px;
        }

        .content-section {
          align-self: start;
          z-index: 10;
          margin-top: -579px;
          width: 100%;
          max-width: 3729px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .feature-image {
          aspect-ratio: 1.79;
          object-fit: contain;
          width: 100%;
        }

        .feature-image-secondary {
          aspect-ratio: 1.48;
          object-fit: contain;
          width: 100%;
        }

        .brand-section {
          margin-top: 40px;
          text-align: center;
        }

        .brand-title {
          color: rgba(0, 0, 179, 1);
          font: 400 222px DignusExpandExtBlck, -apple-system, Roboto, Helvetica, sans-serif;
          margin-bottom: 40px;
        }

        .brand-images {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .brand-logo {
          aspect-ratio: 1;
          object-fit: contain;
          width: 100%;
          max-width: 175px;
        }

        @media (max-width: 991px) {
          .header-section {
            margin-right: 10px;
          }

          .service-images {
            margin-top: -200px;
          }

          .content-section {
            margin-top: -200px;
          }

          .brand-title {
            font-size: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default CarServiceLayout;