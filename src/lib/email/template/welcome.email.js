export function welcomeMailTemplate({ name }){
    return`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Welcome to Sanvi Mahila Jan Seva Sansthan</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Hii! </strong> ${name}</p>
        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
         Thank you for contacting us! We'll be looking forward to collaborating with you.
        </div>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Sent: ${new Date().toLocaleString()}
      </p>
    </div>`
}
