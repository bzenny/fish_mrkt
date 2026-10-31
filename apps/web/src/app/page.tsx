import brand from "../../../../packages/brand/tokens.json";

export default function Home() {
  const c = brand.colors;
  return <main style={{minHeight:"100vh",background:c.deepOcean,color:c.text,fontFamily:"system-ui,sans-serif",padding:"clamp(24px,5vw,70px)"}}>
    <div style={{maxWidth:1100,margin:"auto"}}>
      <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap"}}>
        <strong style={{fontSize:28,letterSpacing:"-1px"}}>FI<span style={{color:c.gold}}>$</span>Hmrkt</strong>
        <span style={{color:c.electricBlue,fontSize:12,letterSpacing:2,fontWeight:800}}>SIMULATION ONLY</span>
      </header>
      <section style={{padding:"clamp(65px,9vw,130px) 0 45px"}}>
        <p style={{color:c.gold,fontSize:13,letterSpacing:3,fontWeight:800}}>FAKE INTERNET CASH MARKET</p>
        <h1 style={{fontSize:"clamp(44px,7vw,84px)",lineHeight:1.08,letterSpacing:"-.05em",margin:"20px 0"}}>Trade virtually.<br/><span style={{color:c.gold}}>Learn for real.</span></h1>
        <p style={{fontSize:19,maxWidth:650,color:c.muted}}>Explore simulated markets, compare strategies and learn from outcomes without risking real capital.</p>
      </section>
      <section style={{border:"1px solid #34495b",background:"#12263c",borderRadius:18,padding:28,maxWidth:690}}>
        <p style={{color:c.muted,marginTop:0}}>Initial sandbox allocation</p>
        <strong style={{fontSize:"clamp(26px,4vw,40px)",fontVariantNumeric:"tabular-nums"}}>100,000.00 <span style={{color:c.gold}}>FI$H_usd</span></strong>
        <p style={{color:c.muted}}>Trading and authentication are under construction. No live quotes or trades are available yet.</p>
      </section>
      <footer style={{marginTop:55,color:c.muted,fontSize:14}}>FI$H is virtual currency. <a href="https://bzenny.github.io/fish_mrkt/" style={{color:c.gold}}>Explore the brand guide</a></footer>
    </div>
  </main>;
}
