import Cookies from 'js-cookie';

const useRoleProtection = (allowedRoles:any) => {
  const role = Cookies.get('role');
  
  if (!role) {
    return false; // No role found
  }

  return allowedRoles.includes(role);
}

export default useRoleProtection;
