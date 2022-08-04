
type LightLayoutProps = {
    children: React.ReactNode;
  }

export const LightLayout = ( {children}: LightLayoutProps ) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Light Layout</h3>
            {children}
        </div>
    )
}
