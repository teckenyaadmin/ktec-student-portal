 "use client";

import { useMemo, useState } from "react";

const WHATSAPP = "254759777870";
const EMAIL = "TEC.KENYA.ADMIN@gmail.com";

function wa(service: string) {
  const message = `Hello KENYA TERTIARY EDUCATION CENTER. I would like assistance with: ${service}.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
const clusters = [
  "Cluster 1 – Law", "Cluster 2 – Business, Hospitality & Related",
  "Cluster 3 – Social Sciences & Related", "Cluster 4 – Humanities & Related",
  "Cluster 5 – Media & Communication", "Cluster 6 – Education",
  "Cluster 7 – Science & Related", "Cluster 8 – Engineering & Technology",
  "Cluster 9 – Computing & Informatics", "Cluster 10 – Health Sciences",
  "Cluster 11 – Agriculture & Related", "Cluster 12 – Environmental Studies",
  "Cluster 13 – Architecture & Built Environment", "Cluster 14 – Arts & Design",
  "Cluster 15 – Sports & Recreation", "Cluster 16 – Veterinary & Animal Health",
  "Cluster 17 – Natural Resources", "Cluster 18 – Other Programme Areas"
];
export default function Home() {
  const [query, setQuery] = useState("");
  const [showClusters, setShowClusters] = useState(false);
  const filtered = useMemo(() => clusters.map((name, index) => ({ name, id: index + 1 })).filter(x => x.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <main>
      <div className="topbar"><span>Independent student guidance • Kenya</span><span>WhatsApp: +254 759 777 870</span></div>
      <header className="nav wrap">
        <a className="brand" href="#"><span className="brandmark">K</span><span><b>KENYA TERTIARY</b><small>EDUCATION CENTER</small></span></a>
        <nav><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#clusters">Cluster guide</a><a href="#contact">Contact</a></nav>
        <a className="navcta" href={wa("general enquiry")} target="_blank" rel="noreferrer">Talk to an advisor ↗</a>
      </header>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"/> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Make informed choices.<br/><em>Build your future.</em></h1>
            <p className="hero-copy">Practical tertiary education guidance for Kenyan students — from course exploration and cluster guidance to funding information and career planning.</p>
            <div className="hero-actions"><a className="button gold" href="#services">Explore student services</a><a className="button outline" href={wa("education guidance")} target="_blank" rel="noreferrer">Chat with us</a></div>
            <div className="trustline"><span>✓ Student-focused guidance</span><span>✓ Clear, transparent pricing</span><span>✓ Human support when needed</span></div>
          </div>
          <div className="hero-panel">
            <div className="panel-kicker">THE KTEC APPROACH</div>
            <div className="panel-number">01</div><h3>Discover your options.</h3><p>Explore courses, compare pathways and understand the next steps before making a decision.</p>
            <div className="panel-rule"/>
            <div className="panel-stats"><div><b>18</b><span>KUCCPS clusters</span></div><div><b>3</b><span>Core guidance tools</span></div><div><b>1</b><span>Future to shape</span></div></div>
            <div className="panel-seal">KTEC <span>KENYA</span></div>
          </div>
        </div>
      </section>
      <section className="notice wrap"><b>Important:</b> KTEC is an independent education guidance service. We are not KUCCPS, HELB, HEF or a government agency. Always confirm official applications, requirements, deadlines and results through the relevant official platforms.</section>
      <section id="services" className="section wrap">
        <div className="section-heading"><div><div className="eyebrow">HOW WE CAN HELP</div><h2>Guidance for every next step.</h2></div><p>Understand your options, make confident decisions and get support when you need a helping hand.</p></div>
        <div className="cards">
          <article className="service-card"><div className="icon">◎</div><div className="card-tag">01 / COURSE PLANNING</div><h3>Cluster analysis</h3><p>Explore all 18 programme clusters together and understand subject-based pathways. This is guidance, not an official KUCCPS weighted-points result.</p><div className="price">KES 200 <small>all 18 clusters</small></div><a href={wa("all 18 cluster analyses – KES 200")} target="_blank" rel="noreferrer">Request cluster analysis →</a></article>
          <article className="service-card featured"><div className="icon">⌕</div><div className="card-tag">02 / COURSE DISCOVERY</div><h3>Basic course research</h3><p>Get help exploring a course, what it involves, possible study pathways and questions to ask before choosing.</p><div className="price">KES 100 <small>per basic research request</small></div><a href={wa("basic course research – KES 100")} target="_blank" rel="noreferrer">Research a course →</a></article>
          <article className="service-card"><div className="icon">✧</div><div className="card-tag">03 / PERSONAL DIRECTION</div><h3>Personalised career report</h3><p>A more detailed report to help you reflect on your interests, subject strengths and possible education pathways.</p><div className="price">KES 200 <small>per personalised report</small></div><a href={wa("personalised career report – KES 200")} target="_blank" rel="noreferrer">Request a career report →</a></article>
        </div>
      </section>
      <section id="clusters" className="cluster-section">
        <div className="wrap cluster-grid">
          <div><div className="eyebrow light">EXPLORE YOUR OPTIONS</div><h2>18 clusters.<br/><em>More ways forward.</em></h2><p>Search the cluster guide to begin exploring programme areas. Final programme eligibility and official weighted cluster points must be confirmed using current KUCCPS information.</p><button className="button gold" onClick={() => setShowClusters(v => !v)}>{showClusters ? "Hide cluster guide" : "View all 18 clusters"}</button></div>
          <div className="cluster-box">
            <label htmlFor="cluster-search">Find a cluster</label><input id="cluster-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search e.g. health, law, ICT..."/>
            {showClusters && <ul>{filtered.map(c => <li key={c.id}><a href={`/clusters/${c.id}`} style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,color:"#e0e6ee",textDecoration:"none",padding:"3px 0"}}><span>{c.name}</span><strong style={{color:"#d8b56a",whiteSpace:"nowrap"}}>Explore →</strong></a></li>)}{filtered.length === 0 && <li>No matching cluster. Try another keyword.</li>}</ul>}
            {!showClusters && <div className="cluster-placeholder"><b>18</b><span>programme clusters to explore</span><small>Tap “View all 18 clusters” to open the guide.</small></div>}
          </div>
        </div>
      </section>
      <section id="pricing" className="section wrap">
        <div className="section-heading"><div><div className="eyebrow">SIMPLE & TRANSPARENT</div><h2>Know the cost upfront.</h2></div><p>Prices shown are for the listed guidance services. For anything else, contact our team for clarification before proceeding.</p></div>
        <div className="price-table"><div><span>All 18 cluster analyses</span><b>KES 200</b></div><div><span>Basic course research</span><b>KES 100</b></div><div><span>Detailed personalised career report</span><b>KES 200</b></div><div><span>Other services not listed</span><b>Contact us</b></div></div>
      </section>
      <section className="support-section">
        <div className="wrap support-grid"><div><div className="eyebrow light">NEED HUMAN SUPPORT?</div><h2>Some journeys need a conversation.</h2><p>For KUCCPS applications, revisions, transfers, HELB/HEF guidance, KRA assistance, training and any service not listed here, contact us directly.</p></div><a className="button gold" href={wa("a service not listed on the website")} target="_blank" rel="noreferrer">Contact us on WhatsApp ↗</a></div>
      </section>
      <footer id="contact">
        <div className="wrap footer-grid"><div><a className="brand footer-brand" href="#"><span className="brandmark">K</span><span><b>KENYA TERTIARY</b><small>EDUCATION CENTER</small></span></a><p>Helping students navigate tertiary education with clearer information and practical guidance.</p></div><div><h4>Contact</h4><a href="https://wa.me/254759777870" target="_blank" rel="noreferrer">WhatsApp / Call: +254 759 777 870</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><div><h4>Important links</h4><a href="https://www.kuccps.net/" target="_blank" rel="noreferrer">KUCCPS official website ↗</a><a href="https://www.hef.co.ke/" target="_blank" rel="noreferrer">Higher Education Financing ↗</a></div></div>
        <div className="wrap copyright">© {new Date().getFullYear()} KENYA TERTIARY EDUCATION CENTER. Independent education guidance service.</div>
      </footer>
    </main>
  );
}
