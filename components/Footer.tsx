import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-erb">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <Image
                src="/images/erb-logo.png"
                alt="Erb Family Wellness"
                width={160}
                height={42}
                style={{ height: "auto", maxHeight: 40, width: "auto" }}
              />
            </div>
            <p className="footer__tagline">&ldquo;The Greatest Place of Hope and Healing&rdquo;</p>
            <p className="footer__est">Est. 1998 &middot; 2012 London Olympics &middot; MaxLiving Network</p>
          </div>
          <div className="footer__col">
            <h4>Coppell</h4>
            <p>
              255 S Denton Tap Rd, Suite 200
              <br />
              Coppell, TX 75019
            </p>
            <a href="tel:9723936262">(972) 393-6262</a>
          </div>
          <div className="footer__col">
            <h4>Southlake</h4>
            <p>
              1845 E Southlake Blvd, Suite 140
              <br />
              Southlake, TX 76092
            </p>
            <a href="tel:9723936262">(972) 393-6262</a>
          </div>
          <div className="footer__col">
            <h4>Connect</h4>
            <a href="tel:9723936262">(972) 393-6262</a>
            <a href="mailto:derb@erbfamilywellness.com">derb@erbfamilywellness.com</a>
            <p style={{ marginTop: 8 }}>
              <Link href="https://www.instagram.com/erbfamilywellness/" style={{ marginRight: 12 }}>
                Instagram
              </Link>
              <Link href="https://www.facebook.com/ErbFamilyCoppell" style={{ marginRight: 12 }}>
                Facebook
              </Link>
              <Link href="https://www.linkedin.com/in/drdaviderb/">LinkedIn</Link>
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Erb Family Wellness &middot; Erb Family Chiropractic Center PC
          </p>
          <div className="footer__badges">
            <span className="footer__badge">MaxLiving</span>
            <span className="footer__badge">CareCredit</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
