import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Floptober 2026 - 500 Spots Only'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#e9c93e',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(43, 38, 34, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(43, 38, 34, 0.15) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          border: '12px solid #2b2622',
          borderRadius: '40px',
          background: '#faf7ee',
          boxShadow: '16px 16px 0 0 #2b2622',
        }}>
          <h1 style={{ 
            fontSize: '130px', 
            color: '#2b2622', 
            margin: 0, 
            fontWeight: 900,
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'flex-start'
          }}>
            Floptober 
            <span style={{ 
              color: '#d34766', 
              fontSize: '60px',
              marginLeft: '20px',
              marginTop: '15px'
            }}>
              2026
            </span>
          </h1>
          <p style={{ 
            fontSize: '52px', 
            color: '#d34766', 
            marginTop: '20px', 
            marginBottom: '0',
            fontWeight: 900, 
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            WARNING: ONLY 500 SPOTS
          </p>
          <p style={{ 
            fontSize: '36px', 
            color: '#2b2622', 
            marginTop: '40px',
            marginBottom: '0',
            fontWeight: 600
          }}>
            One month. Four test runs. Zero dignity required.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
