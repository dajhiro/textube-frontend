import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default async function AppleIcon() {
  // Load Playfair Display font from Google Fonts
  const playfairFont = await fetch(
    new URL('https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.ttf')
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontFamily: '"Playfair Display"',
          fontWeight: 700,
          letterSpacing: '-8px',
        }}
      >
        T_
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Playfair Display',
          data: playfairFont,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
