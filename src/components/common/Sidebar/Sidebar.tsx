import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { Toaster, toast } from 'sonner'


export function SideBar () {
    function validate(event: React.MouseEvent) {
      const canAccess = false

      if(!canAccess) {
        event.preventDefault()
        toast.error('Insira os dados do abrigo!')
      }
    }


    return <nav className={styles.sidebar}>
      <Toaster position='top-center' richColors={true} />
        <NavLink 
            className={({isActive}) => (isActive? styles.active : '')} 
            to="/admin" 
            end 
        >
            Meu abrigo
        </NavLink>

        <NavLink 
          onClick={validate}
          className={({isActive}) => (isActive? styles.active : '')}
          to="/admin/pets"
          
        >
          Pets
        
        </NavLink>
        <NavLink to="/">Sair</NavLink>
    </nav>
}