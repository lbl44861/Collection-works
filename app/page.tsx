import VideoCard from "./VideoCard";
import SmokeReveal from "./SmokeReveal";

const aiVideos = [
  { no: "01", title: "AI 漫剧作品 01", src: "/videos/ai-comic-01.mp4" },
  { no: "02", title: "AI 漫剧作品 02", src: "/videos/ai-comic-02.mp4" },
  { no: "03", title: "AI 漫剧作品 03", src: "/videos/ai-comic-03.mp4" },
  { no: "04", title: "AI 漫剧作品 04", src: "/videos/ai-comic-04.mp4" },
];

const characters = [
  { src: "/characters/character-01.png", label: "角色设定 01" },
  { src: "/characters/character-02.png", label: "角色设定 02" },
  { src: "/characters/character-03.png", label: "角色设定 03" },
  { src: "/characters/character-04.jpg", label: "角色设定 04" },
  { src: "/characters/character-05.jpg", label: "角色设定 05" },
  { src: "/characters/character-06.jpg", label: "角色设定 06" },
];

const scenes = [
  { src: "/scenes/scene-01.jpg", label: "住宅客厅" },
  { src: "/scenes/scene-02.jpg", label: "住宅卧室" },
  { src: "/scenes/scene-03.jpg", label: "住宅厨房" },
  { src: "/scenes/scene-04.jpg", label: "宴会大厅" },
  { src: "/scenes/scene-05.jpg", label: "钢琴会客厅" },
  { src: "/scenes/scene-06.jpg", label: "都市豪宅" },
  { src: "/scenes/scene-07.jpg", label: "少年卧室" },
  { src: "/scenes/scene-08.jpg", label: "古镇街道" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader frame">
        <a className="brand" href="#top">陆李彬 / LI BIN LU</a>
        <span className="reel">35mm · Reel 01</span>
        <nav aria-label="主导航">
          <a href="#ai-comic">AI 漫剧</a><a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero frame">
        <div className="leader"><p className="micro">Picture start / Visual narrative archive</p><p className="micro gold">● Rec 24 fps</p></div>
        <div className="heroScreen">
          <div className="gate gateOne" /><div className="gate gateTwo" />
          <SmokeReveal className="heroContent">
            <p className="chapter">CONTENT × AI × MOVING IMAGE</p>
            <h1>把故事，变成<br />可见的世界。</h1>
            <p className="subtitle">内容策划 · AI 漫剧 · AI 视频</p>
          </SmokeReveal>
          <span className="timecode">TC 01:00:00:00</span>
        </div>
        <div className="heroFoot">
          <p className="micro">LI BIN LU / CONTENT CREATOR<br />Guangxi · China</p>
          <p className="heroNote">从选题与脚本出发，将内容策划、AI 视觉生成和短视频后期连接成完整流程，让想法真正成为可传播的作品。</p>
          <a className="folio" href="#ai-comic">VIEW THE WORKS ↓</a>
        </div>
      </section>

      <section className="portfolioSection frame" id="ai-comic">
        <div className="sectionHead">
          <p className="micro">01 / AI COMIC SERIES</p><h2>AI 漫剧</h2><p className="micro alignRight">Script · Character · Scene · Film</p>
        </div>
        <p className="sectionIntro">参与 AI 真人漫剧从脚本拆解、角色与场景设定、分镜制作，到视频生成与后期包装的全流程制作。</p>

        <div className="subHead"><span>01—A</span><h3>导演作品</h3><p>DIRECTOR&apos;S WORKS</p></div>
        <div className="directorSingle">
          <article className="directorCard">
            <div className="directorFrame directorWorkImage">
              <img src="/director-work-01.jpg" alt="《王妃不装了，王爷彻底沦陷》作品页面" />
              <span className="frameCode">DIRECTED BY LI BIN LU / 01</span>
            </div>
            <div className="mediaMeta directorMeta">
              <span>01</span>
              <h4>王妃不装了，王爷彻底沦陷</h4>
              <p>最高热度 3500 万</p>
            </div>
            <p className="directorStatus"><span>COMING SOON</span>新剧上线中，敬请期待</p>
          </article>
        </div>

        <div className="subHead"><span>01—B</span><h3>生成与剪辑示例</h3><p>4 FILMS</p></div>
        <p className="scrollHint" aria-hidden="true"><span>左右滑动查看</span><b>←&nbsp;&nbsp;→</b></p>
        <div className="videoGrid mediaRail" role="region" aria-label="漫剧视频，横向滑动查看更多" tabIndex={0}>
          {aiVideos.map((video, index) => (
            <VideoCard key={video.no} {...video} featured={index === 0} />
          ))}
        </div>

        <div className="subHead"><span>01—C</span><h3>人物设计</h3><p>6 CHARACTERS</p></div>
        <p className="scrollHint" aria-hidden="true"><span>左右滑动查看</span><b>←&nbsp;&nbsp;→</b></p>
        <div className="characterGrid mediaRail" role="region" aria-label="人物设计，横向滑动查看更多" tabIndex={0}>
          {characters.map((character, index) => (
            <figure className="characterCard" key={character.src}>
              <div className="characterImage"><img src={character.src} alt={character.label} /></div>
              <figcaption><span>0{index + 1}</span><b>{character.label}</b><em>CHARACTER SHEET</em></figcaption>
            </figure>
          ))}
        </div>

        <div className="subHead"><span>01—D</span><h3>场景设计</h3><p>8 ENVIRONMENTS</p></div>
        <p className="scrollHint" aria-hidden="true"><span>左右滑动查看</span><b>←&nbsp;&nbsp;→</b></p>
        <div className="sceneGrid mediaRail" role="region" aria-label="场景设计，横向滑动查看更多" tabIndex={0}>
          {scenes.map((scene, index) => (
            <figure className="sceneCard" key={scene.src}>
              <div className="sceneImage"><img src={scene.src} alt={scene.label} /></div>
              <figcaption><span>0{index + 1}</span><b>{scene.label}</b><em>ENVIRONMENT DESIGN</em></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="intertitle">
        <SmokeReveal className="intertitleReveal" threshold={0.45}>
          <p className="micro">INTERTITLE / 02</p>
          <blockquote>“把内容想清楚，<br />再让画面真正发生。”</blockquote>
        </SmokeReveal>
      </section>

      <section className="about frame" id="about">
        <p className="micro">02 / About the maker</p>
        <SmokeReveal className="aboutMain aboutReveal">
          <h2>从内容出发，完成<br />AI 影像的全流程表达。</h2>
          <p>我是陆李彬，广西师范大学文化产业管理专业本科生，聚焦内容营销、AI 视频与 AI 漫剧，具备从选题分析、剧本拆解到画面生成、剪辑包装和平台运营的完整实践经验。</p>
        </SmokeReveal>
        <div className="services"><p className="micro">CAPABILITIES</p><span>内容策划与脚本开发</span><span>AI 角色、场景与分镜</span><span>AI 视频生成与后期</span><span>新媒体内容运营</span></div>
      </section>

    </main>
  );
}
