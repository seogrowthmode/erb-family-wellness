"use client";

interface FormCardProps {
  subtitle?: string;
  submitText?: string;
  showPrice?: boolean;
}

export default function FormCard({
  subtitle = "Begin your healing journey today.",
  submitText = "Book My $55 Visit",
  showPrice = true,
}: FormCardProps) {
  const handlePhoneFormat = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 10) val = val.slice(0, 10);
    if (val.length >= 7) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
    } else if (val.length >= 4) {
      e.target.value = `(${val.slice(0, 3)}) ${val.slice(3)}`;
    } else if (val.length >= 1) {
      e.target.value = `(${val}`;
    }
  };

  return (
    <div className="form-card">
      {showPrice && (
        <>
          <p className="form-card__price">
            New Patient Special: <strong>$55</strong>
          </p>
          <p className="form-card__subtitle">{subtitle}</p>
        </>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(___) ___-____"
              onChange={handlePhoneFormat}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group form-group--full">
            <label htmlFor="location">Preferred Location</label>
            <select id="location" name="location">
              <option value="coppell">Coppell &mdash; 255 S Denton Tap Rd</option>
              <option value="southlake">Southlake &mdash; 1845 E Southlake Blvd</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group form-group--full">
            <label htmlFor="message">Message (Optional)</label>
            <textarea id="message" name="message" placeholder="Tell us about your health goals..." rows={3} />
          </div>
        </div>
        <button type="submit" className="form-card__submit">
          {submitText} &rarr;
        </button>
      </form>
      <p className="form-card__note">CareCredit accepted &middot; Same-day availability</p>
    </div>
  );
}
