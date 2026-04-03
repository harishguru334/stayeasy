import { Link } from "react-router-dom";
import catagory from "../../Catagory";

const topButtons = [
    { icon: "fa-gauge", label: "Dashboard" },
    { icon: "fa-chart-pie", label: "Chart" },
    { icon: "fa-utensils", label: "Food Chart" },
    { icon: "fa-chart-line", label: "Sale Chart" },
];

function Dashboard() {
    return (
        <div style={{ background: "#e5e7eb", minHeight: "87vh", margin: "12px", marginTop: "28px", overflowY: "auto", padding: "12px" }}>

            {/* Top Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                    {topButtons.map((btn) => (
                        <button
                            key={btn.label}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "6px 4px",
                                width: "60px",
                                minWidth: "60px",
                                fontSize: "11px",
                                cursor: "pointer",
                                lineHeight: "1.3",
                                textAlign: "center"
                            }}
                        >
                            <i className={`fa-solid ${btn.icon}`} style={{ fontSize: "16px", marginBottom: "4px" }}></i>
                            <span>{btn.label}</span>
                        </button>
                    ))}
                </div>
                <span style={{ fontWeight: "600", fontSize: "13px", whiteSpace: "nowrap", paddingLeft: "8px" }}>
                    Balance: ......
                </span>
            </div>

            {/* Category Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "12px",
            }}>
                {catagory && catagory.map((item) => (
                    <Link
                        key={item.route}
                        to={item.route}
                        style={{ display: "block", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 6px rgba(0,0,0,0.2)", textDecoration: "none" }}
                    >
                        <img
                            src={item.Image}
                            alt={item.name || "category"}
                            style={{ width: "100%", height: "110px", objectFit: "cover", display: "block" }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;