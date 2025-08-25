export default function ProjectCard({ title, description, image, tags, url, repo }){
  return (
    <article className="card work-card">
      <img src={image} alt="" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'8px 0 12px'}}>
        {tags.map(t => <span key={t} className="badge">{t}</span>)}
      </div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        {url && <a className="btn glow" target="_blank" rel="noreferrer" href={url}>Live Demo</a>}
        {repo && <a className="btn ghost glow" target="_blank" rel="noreferrer" href={repo}>Source</a>}
      </div>
    </article>
  )
}
