import React, { useState, useEffect } from 'react';

const Awards = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to dynamically load images from folder
  const loadImagesFromFolder = () => {
    // This function will dynamically import all images from the awards folder
    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
      });
      return images;
    };

    try {
      // Dynamically import all images from the images/awards folder
      const imageModules = importAll(
        require.context('../images/awards', false, /\.(png|jpe?g|svg)$/)
      );
      
      // Convert to array format
      const imageArray = Object.keys(imageModules).map(key => ({
        src: imageModules[key],
        name: key.split('.')[0] // Remove file extension for name
      }));
      
      setImages(imageArray);
    } catch (error) {
      console.log('Awards folder not found, using fallback images');
      // Fallback to manual imports if folder doesn't exist
      try {
        const award2 = require('../images/award2.png');
        const award3 = require('../images/award3.png');
        const award4 = require('../images/award4.png');
        
        setImages([
          { src: award2, name: 'award2' },
          { src: award3, name: 'award3' },
          { src: award4, name: 'award4' }
        ]);
      } catch (fallbackError) {
        console.log('Fallback images not found');
        setImages([]);
      }
    }
  };

  useEffect(() => {
    loadImagesFromFolder();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }; 

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const achievements = [
    {
      icon: "🥇",
      title: "50+ Stage Performances",
      description: "Showcased excellence across multiple platforms bringing inspiration to fitness community worldwide.",
      timeframe: "4 Years"
    },
    {
      icon: "🥇",
      title: "5 Championship Records",
      description: "Secured top positions in competitive events with discipline and dedication to excellence.",
      timeframe: "2021-2024"
    },
    {
      icon: "⭐",
      title: "Master Trainer Status",
      description: "Recognized expertise in fitness training with proven track record of success.",
      timeframe: "Certified"
    },
    {
      icon: "🎯",
      title: "Industry Benchmark",
      description: "Setting standards for excellence and discipline in the fitness industry.",
      timeframe: "Ongoing"
    }
  ];

  if (images.length === 0) {
    return (
      <div style={{ 
        backgroundColor: '#000000', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#fff',
        fontSize: '1.2rem'
      }}>
        Loading awards images...
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000000', fontFamily: 'Lato, sans-serif' }}>
      {/* Awards Section */}
      <section id="awards" style={{ 
        width: '100%', 
        minHeight: '120vh', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: '#000000'
      }}>
        {/* Header */}
        <h1 className="main-title" style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontFamily: 'Lato',
          textAlign: 'center',
          marginBottom: '40px',
          padding: '0 20px'
        }}>
          Awards & <span style={{ color: '#FF1414' }}>Achievements</span>
        </h1>

        {/* Main Content Container */}
        <div className="main-content" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          marginBottom: '60px',
          gap: '50px',
          padding: '0 20px'
        }}>
          
          {/* Image Carousel Section */}
          <div className="carousel-section" style={{ 
            width: '50%',
            position: 'relative'
          }}>
            {/* Main Image Container */}
            <div style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '2px 2px 12px rgba(184, 0, 0, 0.445)',
              border: '1px solid #FF1414'
            }}>
              <div style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${currentImageIndex * 100}%)`
              }}>
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={`Award ${image.name}`} 
                    style={{
                      width: '100%',
                      height: 'clamp(300px, 50vw, 400px)',
                      objectFit: 'cover',
                      flexShrink: 0
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50%',
                  width: 'clamp(35px, 6vw, 40px)',
                  height: 'clamp(35px, 6vw, 40px)',
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FF1414';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.color = '#000';
                }}
              >
                ‹
              </button>
              
              <button 
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50%',
                  width: 'clamp(35px, 6vw, 40px)',
                  height: 'clamp(35px, 6vw, 40px)',
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FF1414';
                  e.target.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                  e.target.style.color = '#000';
                }}
              >
                ›
              </button>

              {/* Achievement Badge */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: '#FF1414',
                color: '#fff',
                padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 15px)',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                boxShadow: '5px 10px 30px rgba(255, 2, 2, 0.336)'
              }}>
                🏆 Champion
              </div>

              {/* Image Counter */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '15px',
                fontSize: 'clamp(0.7rem, 2vw, 0.8rem)'
              }}>
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Dot Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  style={{
                    width: 'clamp(10px, 2vw, 12px)',
                    height: 'clamp(10px, 2vw, 12px)',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: index === currentImageIndex ? '#FF1414' : '#555',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === currentImageIndex ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="content-section" style={{ 
            width: '45%',
            color: '#fff'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#FF1414',
              fontWeight: '500',
              margin: '0px',
              padding: '0px',
              fontFamily: 'Lato',
              lineHeight: '1.2'
            }}>
              50+ Stages in 4 Years
            </h1>
            
            <p style={{
              width: '100%',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#cecece',
              lineHeight: '1.6',
              marginTop: '20px',
              marginBottom: '30px'
            }}>
              Our master trainer has performed on over 50 stages in just 4 years and secured 
              5 championship records, bringing glory and inspiration to our community. We take 
              pride in excellence, discipline, and achievements that set benchmarks in the fitness industry.
            </p>

            {/* Stats Container */}
            <div className="stats-container" style={{
              display: 'flex',
              gap: 'clamp(10px, 3vw, 20px)',
              marginBottom: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{
                textAlign: 'center',
                padding: 'clamp(15px, 3vw, 20px)',
                backgroundColor: '#000',
                border: '1px solid #FF1414',
                borderRadius: '10px',
                minWidth: 'clamp(100px, 20vw, 120px)',
                flex: '1'
              }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  color: '#FF1414',
                  marginBottom: '5px'
                }}>50+</div>
                <div style={{
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  color: '#cecece'
                }}>Stage Performances</div>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: 'clamp(15px, 3vw, 20px)',
                backgroundColor: '#000',
                border: '1px solid #FF1414',
                borderRadius: '10px',
                minWidth: 'clamp(100px, 20vw, 120px)',
                flex: '1'
              }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: 'bold',
                  color: '#FF1414',
                  marginBottom: '5px'
                }}>5</div>
                <div style={{
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  color: '#cecece'
                }}>Championships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Cards Container */}
        <div className="achievements-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(15px, 3vw, 25px)',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 20px'
        }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card"
              style={{
                backgroundColor: '#000000',
                minHeight: '320px',
                borderRadius: '10px',
                overflow: 'hidden',
                transition: '0.4s ease-in-out',
                position: 'relative',
                border: '1px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid #FF1414';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 20, 20, 0.3)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon Section */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                paddingTop: '20px'
              }}>
                <span style={{
                  fontSize: 'clamp(3rem, 8vw, 4rem)'
                }}>{achievement.icon}</span>
              </div>

              {/* Text Section */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                flex: '1'
              }}>
                <h2 style={{
                  color: '#fff',
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                  marginBottom: '15px',
                  fontFamily: 'Lato',
                  lineHeight: '1.3'
                }}>
                  {achievement.title}
                </h2>
                
                <p style={{
                  margin: '0 0 20px 0',
                  color: '#ffffffa6',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: 'Lato',
                  lineHeight: '1.5',
                  flex: '1',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {achievement.description}
                </p>

                <div style={{
                  backgroundColor: '#FF1414',
                  color: '#fff',
                  padding: 'clamp(6px, 2vw, 8px) clamp(10px, 3vw, 12px)',
                  borderRadius: '15px',
                  fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                  fontWeight: 'bold',
                  marginTop: 'auto'
                }}>
                  📅 {achievement.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Media Queries */}
      <style jsx>{`
        @media(max-width: 970px) {
          .main-content {
            flex-direction: column !important;
            text-align: center;
            gap: 30px !important;
          }
          .carousel-section {
            width: 90% !important;
            margin-bottom: 20px;
          }
          .content-section {
            width: 90% !important;
          }
          .stats-container {
            justify-content: center !important;
            gap: 15px !important;
          }
        }
        
        @media(max-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 20px !important;
          }
          #awards {
            padding: 20px 10px !important;
          }
        }
        
        @media(max-width: 600px) {
          .main-content {
            padding: 0 10px !important;
          }
          .carousel-section, .content-section {
            width: 95% !important;
          }
          .achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .stats-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          .stats-container > div {
            width: 100% !important;
            max-width: 200px !important;
          }
        }
        
        @media(max-width: 480px) {
          .achievement-card {
            min-height: 280px !important;
            padding: 15px !important;
          }
          #awards {
            min-height: auto !important;
            padding: 20px 5px !important;
          }
        }
        
        @media(max-width: 350px) {
          .achievements-grid {
            padding: 0 10px !important;
          }
          .main-content {
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Awards;