const WHATSAPP = "254759777870";

const clusters = [
  { title: "Law", overview: "Explore programmes and careers connected with legal studies, justice, governance and the administration of law.", areas: ["Legal studies and law-related programmes", "Justice, governance and public institutions", "Legal research, advocacy and compliance"], note: "Check the exact programme title, subject requirements and professional progression route before applying." },
  { title: "Business, Hospitality & Related", overview: "Explore business operations, management, finance, entrepreneurship, tourism and hospitality-related pathways.", areas: ["Business administration and management", "Accounting, finance and economics-related areas", "Hospitality, tourism and service management"], note: "Compare programme levels and check whether a course has mathematics, language or other subject requirements." },
  { title: "Social Sciences & Related", overview: "Explore people, society, communities, public policy, development and social research.", areas: ["Sociology and community development", "Political science and public administration", "Development and social research"], note: "Some programmes may have specific language, humanities or mathematics requirements." },
  { title: "Humanities & Related", overview: "Explore languages, history, philosophy, culture, religion, literature and human thought.", areas: ["Languages and linguistics", "History, philosophy and cultural studies", "Literature and related humanities"], note: "Check the specific language or humanities subject requirements for each programme." },
  { title: "Media & Communication", overview: "Explore journalism, communication, public relations, digital media and content production.", areas: ["Journalism and media studies", "Public relations and corporate communication", "Digital communication and content production"], note: "Review programme descriptions carefully; practical portfolios or additional requirements may apply to some courses." },
  { title: "Education", overview: "Explore teaching, education studies, curriculum, educational leadership and related learning pathways.", areas: ["Teacher education pathways", "Education foundations and curriculum studies", "Educational leadership and support"], note: "Teaching programmes can have specific subject combinations and minimum grades. Verify current professional requirements." },
  { title: "Science & Related", overview: "Explore foundational and applied sciences, laboratory-based study, research and scientific problem-solving.", areas: ["Biological and physical sciences", "Chemistry, physics and mathematics-related areas", "Applied and laboratory sciences"], note: "Science programmes often have precise subject prerequisites. Confirm each programme's current requirements." },
  { title: "Engineering & Technology", overview: "Explore the design, construction, operation and maintenance of systems, machines, infrastructure and technology.", areas: ["Civil, mechanical and electrical engineering areas", "Industrial and production technology", "Engineering technology and technical systems"], note: "Mathematics and science prerequisites are common. Check the exact programme requirements and accreditation." },
  { title: "Computing & Informatics", overview: "Explore computing, software, information systems, networks, data and digital technology.", areas: ["Computer science and software development", "Information technology and information systems", "Networks, data and cybersecurity-related areas"], note: "Compare programme levels and check mathematics or other subject requirements for each institution." },
  { title: "Health Sciences", overview: "Explore health, clinical, diagnostic, public health and healthcare support pathways.", areas: ["Clinical and patient-care programmes", "Medical laboratory and diagnostic areas", "Public health and health information"], note: "Health programmes can have strict subject combinations, minimum grades and professional-body requirements. Verify before applying." },
  { title: "Agriculture & Related", overview: "Explore crop and animal production, agribusiness, food systems and agricultural technology.", areas: ["Crop and plant production", "Animal production and agricultural extension", "Agribusiness and food systems"], note: "Check programme-specific science and mathematics requirements and the practical training components." },
  { title: "Environmental Studies", overview: "Explore environmental protection, conservation, sustainability, climate and environmental management.", areas: ["Environmental science and management", "Conservation and sustainability", "Climate and natural-resource management"], note: "Programme requirements vary; check science, geography and mathematics expectations where applicable." },
  { title: "Architecture & Built Environment", overview: "Explore the planning, design, construction and management of buildings and the built environment.", areas: ["Architecture and architectural technology", "Quantity surveying and construction management", "Urban, regional and spatial planning"], note: "Some programmes may require mathematics, physics, drawing aptitude or a portfolio. Confirm exact entry criteria." },
  { title: "Arts & Design", overview: "Explore creative practice, visual communication, performance, design and applied arts.", areas: ["Fine art and visual arts", "Graphic, fashion and product design", "Performing arts and creative production"], note: "Some institutions may request a portfolio, audition or practical assessment in addition to academic qualifications." },
  { title: "Sports & Recreation", overview: "Explore sport, physical activity, recreation, coaching, fitness and sport management.", areas: ["Sports science and physical education", "Coaching and recreation", "Fitness, wellness and sport management"], note: "Check whether a programme includes fitness tests, practical assessments or specific subject requirements." },
  { title: "Veterinary & Animal Health", overview: "Explore animal health, veterinary-related study, animal production and welfare.", areas: ["Veterinary science pathways", "Animal health and production", "Animal welfare and related applied sciences"], note: "These programmes may require specific biology, chemistry or other science subjects. Verify each course's current requirements." },
  { title: "Natural Resources", overview: "Explore the responsible use, management and conservation of land, water, forests and other natural resources.", areas: ["Forestry and wildlife-related areas", "Water and land-resource management", "Conservation and natural-resource planning"], note: "Check the exact programme requirements, including any science or geography prerequisites." },
  { title: "Other Programme Areas", overview: "Use this guide to explore programmes that may not fit neatly into the broad subject groupings above.", areas: ["Interdisciplinary and specialised programmes", "Emerging and institution-specific fields", "Programmes requiring individual course-by-course review"], note: "Do not assume a programme belongs here based on its name alone. Confirm its official KUCCPS cluster and current requirements." }
];

export default function ClusterDetail({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const cluster = Number.isInteger(id) && id >= 1 && id <= clusters.length ? clusters[id - 1] : null;
  if (!cluster) {
    return <main style={{minHeight:"100vh",background:"#101f3a",color:"#fff",padding:"48px 22px",fontFamily:"Arial,sans-serif"}}>
      <div style={{maxWidth:850,margin:"auto"}}><h1>Cluster not found</h1><p>Please return to the KTEC cluster guide and select one of the 18 listed clusters.</p><a href="/" style={{color:"#d8b56a"}}>← Back to KTEC homepage</a></div>
    </main>;
  }
  const message = `Hello KENYA TERTIARY EDUCATION CENTER. I would like the KES 200 analysis covering all 18 clusters. I am currently exploring Cluster ${id} – ${cluster.title}. Please guide me on the next steps.`;
  const whatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  return (
    <main style={{minHeight:"100vh",background:"#f7f5ef",color:"#172033",fontFamily:"Arial,Helvetica,sans-serif"}}>
      <div style={{background:"#0b172b",color:"#d9e0eb",padding:"10px 5%",fontSize:12}}>KENYA TERTIARY EDUCATION CENTER • Independent student guidance • Kenya</div>
      <header style={{background:"#fff",padding:"18px 5%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,borderBottom:"1px solid #e6e4dc"}}>
        <a href="/" style={{color:"#101f3a",textDecoration:"none",fontWeight:700}}>KTEC | KENYA TERTIARY EDUCATION CENTER</a>
        <a href="/" style={{color:"#87652b",fontSize:13}}>← All clusters</a>
      </header>
      <section style={{background:"#101f3a",color:"#fff",padding:"58px 5%"}}>
        <div style={{maxWidth:900,margin:"auto"}}>
          <div style={{color:"#d8b56a",fontSize:11,letterSpacing:2,fontWeight:700}}>KTEC CLUSTER GUIDE • CLUSTER {id} OF 18</div>
          <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(34px,6vw,56px)",fontWeight:400,lineHeight:1.08,margin:"18px 0"}}>{cluster.title}</h1>
          <p style={{maxWidth:720,color:"#d0d8e5",fontSize:16,lineHeight:1.8}}>{cluster.overview}</p>
        </div>
      </section>
      <section style={{maxWidth:900,margin:"auto",padding:"42px 22px"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:30,fontWeight:400}}>Areas to explore</h2>
        <p style={{color:"#657086",lineHeight:1.7}}>These are broad examples to help you begin researching. They are not an official list of KUCCPS programmes or admission requirements.</p>
        <div style={{display:"grid",gap:12,margin:"24px 0 34px"}}>
          {cluster.areas.map((area) => <div key={area} style={{background:"#fff",border:"1px solid #e6e4dc",padding:"17px 18px",borderLeft:"3px solid #d8b56a"}}>{area}</div>)}
        </div>
        <div style={{background:"#fff",border:"1px solid #e6e4dc",padding:22,marginBottom:28}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:24,fontWeight:400,marginTop:0}}>Important admission guidance</h2>
          <p style={{color:"#657086",lineHeight:1.8,marginBottom:0}}>{cluster.note}</p>
        </div>
        <div style={{background:"#f8f3e7",borderLeft:"3px solid #d8b56a",padding:18,color:"#65583e",fontSize:13,lineHeight:1.7,marginBottom:28}}>
          <strong>Please note:</strong> This page is an introductory guidance summary. It does not calculate official KUCCPS weighted cluster points, confirm eligibility or guarantee placement. Always verify current programme names, cluster allocation, subject requirements and deadlines through KUCCPS and the institution.
        </div>
        <div style={{background:"#101f3a",color:"#fff",padding:25}}>
          <div style={{color:"#d8b56a",fontSize:11,letterSpacing:1.5,fontWeight:700}}>FULL KTEC SERVICE</div>
          <h2 style={{fontFamily:"Georgia,serif",fontWeight:400,fontSize:29,margin:"12px 0"}}>Explore all 18 clusters with guidance</h2>
          <p style={{color:"#d0d8e5",lineHeight:1.7}}>The KES 200 cluster analysis covers all 18 clusters together. Contact our team to request the service and receive guidance on the next steps.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" style={{display:"inline-block",background:"#d8b56a",color:"#101f3a",padding:"14px 18px",fontWeight:700,textDecoration:"none",fontSize:13}}>Request all 18 cluster analysis – KES 200 ↗</a>
        </div>
        <p style={{marginTop:28}}><a href="/" style={{color:"#87652b"}}>← Return to KTEC homepage</a></p>
      </section>
      <footer style={{background:"#0a1527",color:"#b9c4d4",padding:"24px 5%",fontSize:12}}>© {new Date().getFullYear()} KENYA TERTIARY EDUCATION CENTER • WhatsApp / Call: +254 759 777 870</footer>
    </main>
  );
}
