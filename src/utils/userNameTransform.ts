/**
 * Utility to transform default/generic user names to proper Indian names
 */

export function transformUserName(name: string): string {
  // Transform generic "Athlete" name to an Indian name
  if (name === 'Athlete' || name === 'athlete') {
    return 'Shabaresh';
  }
  return name;
}

export function getDefaultProfilePic(originalName: string, currentProfilePic?: string): string {
  // If already has a profile pic, return it
  if (currentProfilePic && currentProfilePic !== '') {
    return currentProfilePic;
  }
  
  // If the original name was "Athlete", use shabaresh.jpg
  if (originalName === 'Athlete' || originalName === 'athlete') {
    return '/ppl/shabaresh.jpg';
  }
  
  // Default fallback
  return '/ppl/shabaresh.jpg';
}

export function getShabareshProfilePic(userName: string, currentProfilePic?: string): string {
  // If user is Shabaresh, use his specific profile pic
  if (userName === 'Shabaresh' || userName === 'Shabaresh Kumar' || userName.toLowerCase().includes('shabaresh')) {
    return '/ppl/shabaresh.jpg';
  }
  
  // Otherwise return current or default
  return currentProfilePic || '/ppl/shabaresh.jpg';
}
