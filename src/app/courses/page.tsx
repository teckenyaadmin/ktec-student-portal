"use client";

import { useMemo, useState } from "react";

const WHATSAPP = "254759777870";
const catalogue = [
  { name: "Diploma in Business Management", area: "Business", level: "Diploma", about: "Introduces management, business operations, entrepreneurship, marketing and basic finance.", pathways: "May lead to business administration, sales, office support or further business studies." },
  { name: "Diploma in Accountancy", area: "Business", level: "Diploma", about: "Covers bookkeeping, financial records, taxation basics, auditing principles and accounting systems.", pathways: "May support progression into accounting roles or further professional and academic study." },
  { name: "Diploma in Information Communication Technology", area: "ICT", level: "Diploma", about: "Typically covers computer systems, networking, programming fundamentals, databases and IT support.", pathways: "May lead to IT support, junior development, networking or further computing studies." },
  { name: "Diploma in Software Development", area: "ICT", level: "Diploma", about: "Focuses on software design, programming, testing, databases and application development.", pathways: "May lead to junior software development, QA or further computing studies." },
  { name: "Diploma in Electrical and Electronic Engineering", area: "Engineering", level: "Diploma", about: "Introduces electrical circuits, electronics, installation, measurement and maintenance principles.", pathways: "May support technician pathways and further engineering education." },
  { name: "Diploma in Civil Engineering", area: "Engineering", level: "Diploma", about: "Covers construction materials, surveying, structural principles, drawing and site practice.", pathways: "May support technician roles in construction and further built-environment study." },
  { name: "Diploma in Community Health", area: "Health", level: "Diploma", about: "Introduces community health promotion, prevention, health education and basic public-health practice.", pathways: "Possible pathways depend on the awarding institution, professional rules and current approvals." },
  { name: "Diploma in Medical Laboratory Sciences", area: "Health", level: "Diploma", about: "A laboratory-focused programme involving biomedical science, specimen handling and diagnostic procedures.", pathways: "Check the current regulator and institution approval, entry requirements and professional registration rules." },
  { name: "Diploma in Education", area: "Education", level: "Diploma", about: "Education programmes prepare learners for defined teaching or education-support roles, depending on the award.", pathways: "Teaching qualifications and registration requirements vary; verify with the relevant regulator." },
  { name: "Diploma in Social Work and Community Development", area: "Social sciences", level: "Diploma", about: "Explores community needs, social support, project work, advocacy and development practice.", pathways: "May lead to community programme support or further social-science studies." },
  { name: "Diploma in Hospitality Management", area: "Hospitality", level: "Diploma", about: "Covers accommodation, food and beverage operations, customer care and hospitality supervision.", pathways: "May lead to hotel, catering, events or tourism operations and further study." },
  { name: "Diploma in Agriculture", area: "Agriculture", level: "Diploma", about: "Introduces crop and/or animal production, farm management, agribusiness and practical agricultural skills.", pathways: "May lead to farm operations, extension support, agribusiness or further agricultural study." },
  { name: "Certificate in Electrical Installation", area: "Engineering", level: "Certificate", about: "A practical technical pathway covering electrical installation skills and safety.", pathways: "Progression and licensing depend on the exact award, assessment body and current regulations." },
  { name: "Certificate in ICT", area: "ICT", level: "Certificate", about: "Builds foundational digital, computer applications and IT skills; course content varies by provider.", pathways: "May provide a foundation for further ICT training or entry-level digital support work." },
  { name: "Certificate in Food and Beverage", area: "Hospitality", level: "Certificate", about: "Introduces food service, hygiene, customer care and hospitality operations.", pathways: "May support entry-level hospitality work or progression to further training." },
  { name: "Certificate in Early Childhood Development and Education", area: "Education", level: "Certificate", about: "Introduces child development, learning support, safety and early-years education practice.", pathways: "Confirm current programme recognition and employment requirements before enrolling." },
];

function makeWhatsApp(course: string) {
  const message = `Hello KENYA TERTIARY EDUCATION CENTER. I would like basic course research (KES 100) for: ${course}. Please share the course overview, study pathway, current entry requirements and recognised institutions. Kindly guide me on payment and the next steps.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All areas");
  const [level, setLevel] = useState("All levels");
  const results = useMemo(() => catalogue.filter((course) => {
    const text = `${course.name} ${course.area} ${course.about}`.toLowerCase();
    return text.includes(query.toLowerCase()) && (area === "All areas" || course.area === area) && (level === "All levels" || course.level === level);
  }), [query, area, level]);
  const areas = ["All areas", ...Array.from(new Set(catalogue.map((c) => c.area)))];

  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f3", color: "#14233d" }}>
      <header style={{ background: "#10213d", color: "white", padding: "18px 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <a href="/" style={{ color: "#e4c477", textDecoration: "none", fontWeight: 700, letterSpacing: 1 }}>KTEC <span style={{ color: "white", fontWeight: 400 }}>| KENYA TERTIARY EDUCATION CENTER</span></a>
        <a href="/" style={{ color: "white" }}>← Back to home</a>
      </header>
      <section style={{ background: "#10213d", color: "white", padding: "58px 5vw 52px" }}>
        <p style={{ color: "#e4c477", letterSpacing: 2, fontSize: 11, fontWeight: 700 }}>COURSE DISCOVERY</p>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(34px,6vw,58px)", lineHeight: 1.08, maxWidth: 760, margin: "12px 0" }}>Explore courses.<br /><span style={{ color: "#e4c477" }}>Understand your options.</span></h1>
        <p style={{ maxWidth: 720, color: "#d2d9e4", lineHeight: 1.7 }}>Search a starter catalogue of common tertiary study areas. Select a course to request personalised basic research from KTEC for KES 100.</p>
      </section>
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 5vw 70px" }}>
        <div style={{ background: "white", border: "1px solid #e5e1d6", padding: 18, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12, marginBottom: 24 }}>
          <label style={{ display: "grid", gap: 7, fontSize: 13, fontWeight: 700 }}>Search courses<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. ICT, nursing, business" style={inputStyle} /></label>
          <label style={{ display: "grid", gap: 7, fontSize: 13, fontWeight: 700 }}>Study area<select value={area} onChange={(e) => setArea(e.target.value)} style={inputStyle}>{areas.map((a) => <option key={a}>{a}</option>)}</select></label>
          <label style={{ display: "grid", gap: 7, fontSize: 13, fontWeight: 700 }}>Level<select value={level} onChange={(e) => setLevel(e.target.value)} style={inputStyle}><option>All levels</option><option>Diploma</option><option>Certificate</option></select></label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 16 }}><h2 style={{ fontFamily: "Georgia,serif", fontSize: 27, margin: 0 }}>Course guide</h2><span style={{ color: "#6b7280", fontSize: 13 }}>{results.length} results</span></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16 }}>
          {results.map((course) => <article key={course.name} style={{ background: "white", border: "1px solid #e5e1d6", padding: 20, display: "flex", flexDirection: "column", minHeight: 300 }}>
            <div style={{ color: "#9b7a36", fontSize: 10, letterSpacing: 1.5, fontWeight: 700 }}>{course.area.toUpperCase()} · {course.level.toUpperCase()}</div>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 22, lineHeight: 1.2, margin: "12px 0" }}>{course.name}</h3>
            <p style={{ color: "#596273", fontSize: 14, lineHeight: 1.6 }}>{course.about}</p>
            <p style={{ color: "#596273", fontSize: 13, lineHeight: 1.6 }}><b>Possible pathway:</b> {course.pathways}</p>
            <div style={{ marginTop: "auto", paddingTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}><b style={{ fontFamily: "Georgia,serif", fontSize: 21 }}>KES 100</b><a href={makeWhatsApp(course.name)} target="_blank" rel="noreferrer" style={{ background: "#e4c477", color: "#14233d", padding: "11px 14px", textDecoration: "none", fontWeight: 700, fontSize: 12 }}>Request research ↗</a></div>
          </article>)}
        </div>
        {results.length === 0 && <p style={{ background: "white", padding: 24, border: "1px solid #e5e1d6" }}>No matching course in this starter guide. Try another search or contact KTEC for help finding it.</p>}
        <aside style={{ marginTop: 28, padding: 18, background: "#f0eadb", borderLeft: "4px solid #c6a65c", color: "#4d4b45", fontSize: 13, lineHeight: 1.7 }}><b>Important guidance:</b> This is an introductory catalogue, not an official KUCCPS programme list. Course titles, award levels, entry requirements, accreditation, professional recognition and availability vary by institution and intake. Confirm current details with KUCCPS, the institution and the relevant regulator before applying. KTEC's KES 100 request is for basic course research; payment instructions will be provided by our advisor before the service is completed.</aside>
      </section>
      <footer style={{ background: "#10213d", color: "#d2d9e4", padding: "24px 5vw", fontSize: 13 }}>KENYA TERTIARY EDUCATION CENTER · WhatsApp / Call: +254 759 777 870 · <a style={{ color: "#e4c477" }} href="mailto:TEC.KENYA.ADMIN@gmail.com">TEC.KENYA.ADMIN@gmail.com</a></footer>
    </main>
  );
}

const inputStyle: React.CSSProperties = { width: "100%", padding: "12px", border: "1px solid #d8d5cc", background: "#fff", color: "#14233d", borderRadius: 2, fontSize: 14 };
