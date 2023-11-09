import Spline from "@splinetool/react-spline";
import "./main.scss";

function App() {
    return (
        <main>
            <section className="about">
                <div className="heading">
                    <div>
                        <p className="eyebrow">Our Difference</p>
                        <h1>
                            Company Name presents a robust offering of value-added services that provide benefits many standard
                            solution providers cannot.
                        </h1>
                    </div>
                    <a href="/" className="btn">
                        About Our Company
                    </a>
                </div>
                <div className="cards">
                    <div className="card">
                        <Spline className="scene" scene="https://prod.spline.design/EBsNP6QNnmHaUJg4/scene.splinecode" />
                        <div className="content">
                            <h2>Flexible</h2>
                            <p>Technologies designed and manufactured to meet our clients&rsquo; individual specifications.</p>
                        </div>
                    </div>
                    <div className="card">
                        <Spline className="scene" scene="https://prod.spline.design/6cs9mFT71rndtyC1/scene.splinecode" />
                        <div className="content">
                            <h2>Reliable</h2>
                            <p>
                                Products that are 100% tested under full load conditions and inspected for quality before
                                shipment.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <Spline className="scene" scene="https://prod.spline.design/GHJEs2WVMBeCM-Sn/scene.splinecode" />
                        <div className="content">
                            <h2>Precise</h2>
                            <p>All of our products are precision-crafted to exacting manufacturing standards.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
