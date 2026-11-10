
"use client";

import { useState } from "react";

const WHATSAPP = "254759777870";

const grades = [
  "A", "A-", "B+", "B", "B-", "C+", "C", "C-",
  "D+", "D", "D-", "E"
];

const subjects = [
  "English", "Kiswahili", "Mathematics", "Biology",
  "Chemistry", "Physics", "Geography", "History",
  "CRE/IRE/HRE", "Agriculture", "Business Studies",
  "Computer Studies", "Other"
];

export default function CareerReportPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("2025");
  const [index, setIndex] = useState("");
  const [meanGrade, setMeanGrade] = useState("");
  const [subjectGrades, setSubjectGrades] = useState("");
  const [interests, setInterests] = useState("");
  const [preferredArea, setPreferredArea] = useState("");
  const [location, setLocation] = useState("");
  const [extra, setExtra] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!consent) {
      setError("Please confirm that you agree to share these details for career guidance.");
      return;
    }

    const message = `
*PERSONALISED CAREER REPORT REQUEST*
*KTEC - KENYA TERTIARY EDUCATION CENTER*

*Student details*
Name: ${name}
Phone: ${phone}
KCSE year: ${year}
Index number: ${index || "Not provided"}

*Academic performance*
Mean grade: ${meanGrade}
Subject grades:
${subjectGrades}

*Career preferences*
Interests: ${interests}
Preferred study area: ${preferredArea}
Preferred location: ${location || "Not specified"}

Additional information:
${extra || "None"}

*Service requested:* Personalised Career Report
*Price:* KES 200

Please guide me on payment and the next steps.

Sent through the KTEC website.
    `.trim();

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px",
    border: "1px solid #d8d5cc",
    borderRadius: 5,
    background: "white",
    color: "#14233d",
    fontSize: 14,
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontWeight: 700,
    fontSize: 13,
    marginBottom: 7,
    color: "#25344d",
  };

  const sectionStyle: React.CSSProperties = {
    background: "white",
    border: "1px solid #e8e4da",
    borderRadius: 8,
    padding: 20,
    marginBottom: 18,
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f8f7f3",
      color: "#14233d",
    }}>
      <header style={{
        background: "#10213d",
        padding: "18px 5vw",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <a href="/" style={{
          color: "#e4c477",
          fontWeight: 800,
          textDecoration: "none",
        }}>
          KTEC | KENYA TERTIARY EDUCATION CENTER
        </a>
        <a href="/" style={{ color: "white" }}>
          ← Home
        </a>
      </header>

      <section style={{
        background: "#10213d",
        color: "white",
        padding: "45px 5vw",
      }}>
        <p style={{
          color: "#e4c477",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: 2,
        }}>
          YOUR FUTURE STARTS WITH A PLAN
        </p>

        <h1 style={{
          fontFamily: "Georgia,serif",
          fontSize: "clamp(32px,6vw,50px)",
          maxWidth: 750,
          lineHeight: 1.15,
        }}>
          Personalised Career
          <span style={{ color: "#e4c477" }}> Report</span>
        </h1>

        <p style={{
          color: "#d2d9e4",
          lineHeight: 1.7,
          maxWidth: 700,
        }}>
          Tell us about your academic performance, interests and ambitions.
          KTEC will use the information to guide you towards suitable courses
          and possible career pathways.
        </p>

        <div style={{
          color: "#e4c477",
          fontSize: 22,
          fontWeight: 800,
        }}>
          KES 200
          <span style={{
            color: "#d2d9e4",
            fontSize: 12,
            fontWeight: 400,
          }}>
            {" "}· Personalised report
          </span>
        </div>
      </section>

      <form
        onSubmit={submitForm}
        style={{
          maxWidth: 850,
          margin: "30px auto",
          padding: "0 16px 45px",
        }}
      >
        <section style={sectionStyle}>
          <h2 style={{ fontFamily: "Georgia,serif" }}>
            1. Student information
          </h2>

          <div style={{ display: "grid", gap: 16 }}>
            <label>
              <span style={labelStyle}>Full name *</span>
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your full names"
                style={fieldStyle}
              />
            </label>

            <label>
              <span style={labelStyle}>Phone number *</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="e.g. 07XXXXXXXX"
                style={fieldStyle}
              />
            </label>

            <label>
              <span style={labelStyle}>KCSE examination year *</span>
              <select
                required
                value={year}
                onChange={e => setYear(e.target.value)}
                style={fieldStyle}
              >
                {Array.from({ length: 15 }, (_, i) => 2026 - i).map(y =>
                  <option key={y} value={y}>{y}</option>
                )}
              </select>
            </label>

            <label>
              <span style={labelStyle}>KCSE index number (optional)</span>
              <input
                value={index}
                onChange={e => setIndex(e.target.value)}
                placeholder="Enter index number"
                style={fieldStyle}
              />
            </label>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontFamily: "Georgia,serif" }}>
            2. Academic performance
          </h2>

          <label>
            <span style={labelStyle}>KCSE mean grade *</span>
            <select
              required
              value={meanGrade}
              onChange={e => setMeanGrade(e.target.value)}
              style={fieldStyle}
            >
              <option value="">Select your mean grade</option>
              {grades.map(g => <option key={g}>{g}</option>)}
            </select>
          </label>

          <label style={{ display: "block", marginTop: 17 }}>
            <span style={labelStyle}>
              Subject grades *
            </span>
            <textarea
              required
              value={subjectGrades}
              onChange={e => setSubjectGrades(e.target.value)}
              rows={7}
              placeholder={"Enter your subjects and grades, for example:\nEnglish - B\nKiswahili - B+\nMathematics - C+\nBiology - B-\nChemistry - C\nPhysics - C-"}
              style={{ ...fieldStyle, resize: "vertical" }}
            />
            <small style={{ color: "#697386" }}>
              Include as many subjects as possible, with their correct grades.
            </small>
          </label>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontFamily: "Georgia,serif" }}>
            3. Career interests
          </h2>

          <label>
            <span style={labelStyle}>What are your interests and talents? *</span>
            <textarea
              required
              value={interests}
              onChange={e => setInterests(e.target.value)}
              rows={4}
              placeholder="e.g. Technology, medicine, teaching, business, engineering..."
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </label>

          <label style={{ display: "block", marginTop: 17 }}>
            <span style={labelStyle}>Preferred study area *</span>
            <select
              required
              value={preferredArea}
              onChange={e => setPreferredArea(e.target.value)}
              style={fieldStyle}
            >
              <option value="">Select preferred area</option>
              {[
                "Medicine and Health Sciences",
                "Engineering and Technology",
                "ICT and Computer Science",
                "Business and Finance",
                "Education and Teaching",
                "Law and Legal Studies",
                "Agriculture and Environment",
                "Hospitality and Tourism",
                "Social Sciences",
                "Arts and Humanities",
                "Not sure - help me decide",
                "Other",
              ].map(item => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label style={{ display: "block", marginTop: 17 }}>
            <span style={labelStyle}>
              Preferred institution location (optional)
            </span>
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="e.g. Nairobi, Kisumu, anywhere in Kenya"
              style={fieldStyle}
            />
          </label>

          <label style={{ display: "block", marginTop: 17 }}>
            <span style={labelStyle}>
              Anything else we should know? (optional)
            </span>
            <textarea
              value={extra}
              onChange={e => setExtra(e.target.value)}
              rows={3}
              placeholder="Your ambitions, challenges or questions..."
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </label>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ fontFamily: "Georgia,serif" }}>
            4. Consent and submission
          </h2>

          <label style={{
            display: "flex",
            gap: 10,
            alignItems: "flex-start",
            fontSize: 13,
            lineHeight: 1.6,
          }}>
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              style={{ marginTop: 4 }}
            />
            I consent to sharing these details with KTEC for the purpose
            of providing the requested career guidance. I understand that
            this form opens WhatsApp to submit my request.
          </label>

          {error && (
            <p style={{ color: "#b42318", fontSize: 13 }}>
              {error}
            </p>
          )}

          <div style={{
            background: "#f3efe4",
            padding: 15,
            marginTop: 18,
            fontSize: 13,
            lineHeight: 1.7,
          }}>
            <b>Service fee: KES 200.</b>
            <br />
            Submitting this request does not automatically make payment
            or guarantee admission. KTEC will guide you on payment and
            the next steps through WhatsApp.
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: 20,
              padding: 16,
              background: "#c6a65c",
              border: "none",
              borderRadius: 5,
              color: "#10213d",
              fontSize: 15,
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            SUBMIT CAREER REPORT REQUEST →
          </button>
        </section>
      </form>

      <footer style={{
        background: "#10213d",
        color: "#d2d9e4",
        padding: 25,
        textAlign: "center",
        fontSize: 13,
        lineHeight: 1.8,
      }}>
        KENYA TERTIARY EDUCATION CENTER
        <br />
        WhatsApp / Call: +254759777870
        <br />
        TEC.KENYA.ADMIN@gmail.com
      </footer>
    </main>
  );
    }
    
