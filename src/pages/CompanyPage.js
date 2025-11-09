import React from "react";
// import { Breadcrumb } from "../components/Blogs/Breadcrumb";
import ContactUs from "../components/ContactUs/ContactUs"

const AboutUs = () => {
  return (
    <>
    
      {/* Main About Section */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          padding: "100px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "'Poppins', sans-serif",
          color: "#f0f0f0",
        }}
      >
        {/* Right Column: Image */}
        <div style={{
          flex: "1 1 45%",
          minWidth: "300px",
        }}>
          <img
            src="/image-3.jpg"
            alt="NAPCEN Industrial Air Filtration Systems"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Left Column: Text */}
        <div style={{
          flex: "1 1 45%",
          minWidth: "300px",
          padding: "20px"
        }}>
          <h2 style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "25px",
            color: "#fff",
            lineHeight: "1.2"
          }}>
            Welcome to <span style={{ color: "#4dc0ff" }}>NAPCEN</span>
          </h2>

          <div style={{
            marginBottom: "30px",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#d1d1d1"
          }}>
            <p style={{ marginBottom: "20px" }}>
              NAPCEN specializes in advanced industrial air filtration systems
              engineered to remove dust, fumes, corrosive gases, toxic vapors, oil
              mist, odors, and hazardous pollutants. Our air pollution control
              solutions safeguard workers from harmful emissions and enhance indoor
              air quality by effectively eliminating contaminants and unpleasant odors.
            </p>

            <h3 style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              margin: "25px 0 15px 0",
              color: "#4dc0ff"
            }}>
              Industrial Pollution Control Equipment Manufacturers
            </h3>

            <p>
              As a trusted manufacturer and supplier of industrial air pollution
              control equipment in India, we deliver a wide range of high-performance
              products, including dust collectors, fume extraction systems, wet
              scrubbers, dry scrubbers, grossing stations, fume hoods, industrial
              blowers, heat exchangers, PP FRP scrubbers, FRP lining services,
              ventilation systems, ducts, and indoor air pollution control solutions.
              In addition, we offer comprehensive air quality audits to help industries
              achieve regulatory compliance and manage emissions effectively.
            </p>
          </div>

          <a
            href="contact-us-wet-scrubbers-manufacturers-in-chennai.html"
            style={{
              display: "inline-block",
              padding: "14px 35px",
              backgroundColor: "#4dc0ff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 8px rgba(77, 192, 255, 0.3)"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 12px rgba(77, 192, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4dc0ff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 8px rgba(77, 192, 255, 0.3)";
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section style={{
        padding: "100px 20px",
        fontFamily: "'Poppins', sans-serif",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {/* Upper Box */}
          <div style={{
            padding: "60px 40px",
            borderRadius: "12px",
            marginBottom: "60px",
            textAlign: "center",
            color: "white",
          }}>
            <h2 style={{
              fontSize: "2.2rem",
              fontWeight: "600",
              lineHeight: "1.4",
              margin: "0"
            }}>
              We deliver innovative industrial <span style={{ color: "#4dc0ff" }}>Product Solutions</span> that drive sustainable growth. Our expert team focuses on enhancing productivity, improving operational efficiency, and ensuring cost-effective performance in the market.
            </h2>
          </div>

          {/* Lower Box */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}>
            {/* Image Column */}
            <div style={{
              flex: "1 1 45%",
              minWidth: "300px",
            }}>
              <div style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              }}>
                <img 
                  src="/about-us.jpg" 
                  alt="Work Process" 
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                  }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div style={{
              flex: "1 1 45%",
              minWidth: "300px",
            }}>
              <h3 style={{
                fontSize: "2rem",
                fontWeight: "600",
                
                color: "#ffffffff",
                marginBottom: "20px"
              }}>
                Our Work Process
              </h3>
              
              <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#ffffffff",
                marginBottom: "30px"
              }}>
                Discover, Build, Connect, and Launch – we bring together innovative minds and experienced professionals to shape a better future. With the right tools at the right time, we empower businesses to thrive in the shared economy. Our focus is on connecting clients with trusted partners to drive growth and collaboration. By launching highly anticipated programs into the marketplace, we help ideas turn into impactful solutions that create lasting success.
              </p>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
              }}>
                <div style={{
                  flex: "1 1 45%",
                  minWidth: "250px"
                }}>
                  <ul style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0"
                  }}>
                    <li style={{
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      color: "#e5e7e9ff"
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#4dc0ff",
                        borderRadius: "50%",
                        marginRight: "15px",
                        textAlign: "center",
                        lineHeight: "30px",
                        color: "white"
                      }}>✓</span>
                      Great Technology
                    </li>
                    <li style={{
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      color: "#ffffffff"
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#4dc0ff",
                        borderRadius: "50%",
                        marginRight: "15px",
                        textAlign: "center",
                        lineHeight: "30px",
                        color: "white"
                      }}>✓</span>
                      Certified Engineers
                    </li>
                  </ul>
                </div>

                <div style={{
                  flex: "1 1 45%",
                  minWidth: "250px"
                }}>
                  <ul style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0"
                  }}>
                    <li style={{
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      color: "#ffffffff"
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#4dc0ff",
                        borderRadius: "50%",
                        marginRight: "15px",
                        textAlign: "center",
                        lineHeight: "30px",
                        color: "white"
                      }}>✓</span>
                      Delivery On Time
                    </li>
                    <li style={{
                      padding: "10px 0",
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.1rem",
                      color: "#ffffffff"
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#4dc0ff",
                        borderRadius: "50%",
                        marginRight: "15px",
                        textAlign: "center",
                        lineHeight: "30px",
                        color: "white"
                      }}>✓</span>
                      Best Branding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs/>
    </>
  );
};

export default AboutUs;