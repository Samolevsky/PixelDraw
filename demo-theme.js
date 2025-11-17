/**
 * PixelDraw Theme System Demo
 * 
 * This script demonstrates the theme system API and capabilities.
 * Open the browser console and run these commands to test the theme system.
 */

console.log('%c🎨 PixelDraw Theme System Demo', 'font-size: 20px; font-weight: bold; color: #4285f4;');
console.log('%cThe theme system is now active!', 'font-size: 14px; color: #34a853;');
console.log('');

console.log('%cAvailable Commands:', 'font-weight: bold; font-size: 16px;');
console.log('');

console.log('%c1. Get Current Theme', 'font-weight: bold;');
console.log('   PixelDrawTheme.getCurrentTheme()');
console.log('   Returns: "light" or "dark"');
console.log('');

console.log('%c2. Get Saved Preference', 'font-weight: bold;');
console.log('   PixelDrawTheme.getSavedTheme()');
console.log('   Returns: "light", "dark", or "auto"');
console.log('');

console.log('%c3. Set Theme Manually', 'font-weight: bold;');
console.log('   PixelDrawTheme.setTheme("light")   // Force light theme');
console.log('   PixelDrawTheme.setTheme("dark")    // Force dark theme');
console.log('   PixelDrawTheme.setTheme("auto")    // Follow system theme');
console.log('');

console.log('%c4. Toggle Theme', 'font-weight: bold;');
console.log('   PixelDrawTheme.toggle()');
console.log('   Switches between light and dark');
console.log('');

console.log('%c5. Test System Theme Detection', 'font-weight: bold;');
console.log('   // Set to auto mode first');
console.log('   PixelDrawTheme.setTheme("auto")');
console.log('   // Then change your OS theme settings');
console.log('   // Watch the app update automatically!');
console.log('');

console.log('%cTry it now:', 'font-weight: bold; font-size: 16px; color: #fbbc05;');
console.log('Type: PixelDrawTheme.toggle()');
console.log('');

// Display current status
console.log('%cCurrent Status:', 'font-weight: bold; font-size: 16px; color: #ea4335;');
console.log('Current Theme:', PixelDrawTheme.getCurrentTheme());
console.log('Saved Preference:', PixelDrawTheme.getSavedTheme());

// Detect system theme
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
console.log('System Theme:', systemTheme);
console.log('');

// Show if auto-detection is working
if (PixelDrawTheme.getSavedTheme() === 'auto') {
    console.log('%c✅ Auto-detection is ACTIVE', 'color: #34a853; font-weight: bold;');
    console.log('The app will follow your system theme automatically.');
} else {
    console.log('%c⚙️ Manual mode is active', 'color: #4285f4; font-weight: bold;');
    console.log('The app is using your saved preference.');
    console.log('Run: PixelDrawTheme.setTheme("auto") to enable auto-detection');
}
console.log('');

// Add a helper function to monitor theme changes
window.monitorTheme = function() {
    console.log('%c🔍 Theme Monitor Started', 'font-weight: bold; color: #4285f4;');
    console.log('Watching for theme changes...');
    console.log('Press Ctrl+C to stop');
    
    let lastTheme = PixelDrawTheme.getCurrentTheme();
    
    const interval = setInterval(() => {
        const currentTheme = PixelDrawTheme.getCurrentTheme();
        if (currentTheme !== lastTheme) {
            console.log(`%c🎨 Theme changed: ${lastTheme} → ${currentTheme}`, 'color: #fbbc05; font-weight: bold;');
            lastTheme = currentTheme;
        }
    }, 500);
    
    return interval;
};

console.log('%cBonus:', 'font-weight: bold; font-size: 16px;');
console.log('Run: monitorTheme() to watch for theme changes in real-time');
console.log('');
