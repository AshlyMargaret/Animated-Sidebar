
// Sidebar.tsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import BoxIcon from '../box-icon'; // Adjust the path based on your project structure
import { AiOutlineMenu ,AiFillHome,AiFillMail ,AiFillStar} from "react-icons/ai";
import { MdExplore,MdNotes,MdSettings} from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";





interface MenuItem {
    name: string;
    iconName: any;
    type?: string;
    color?: string;
    rotate?: string;
  }

const Sidebar: React.FC = () => {
  const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
  };

  let menuItems: MenuItem[] = [
    {
      name: "Eduhance",
      iconName: <AiOutlineMenu/>,
    },
    {
      name: "Home",
      iconName: <AiFillHome/>,
      type: "solid",
    },
    {
      name: "Explore",
      iconName: <MdExplore/>,
      type: "solid",
    },
    {
      name: "Messages",
      iconName: <AiFillMail/>,
      type: "solid",
    },
    {
      name: "Resources",
      iconName: <MdNotes/>,
      type: "solid",
    },
    {
      name: "Starred",
      iconName: <AiFillStar/>,
      type: "solid",
    },
    {
      name: "Settings",
      iconName: <MdSettings/>,
      type: "solid",
    },
    {
      name: "Log Out",
      iconName: <RiLogoutBoxRFill/>,
      color: "red",
      rotate: "180",
    },
  ];


  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const changeSmall = useMediaQuery('(max-height: 550px)');
  let delay = 1;

  useEffect(() => {
    setAnimate(true);
    let timer = setTimeout(() => setAnimate(false), delay * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [active, delay]);

  return (
    <div className={`sidebar ${expanded && 'expanded'}`}>
      {menuItems.map((item, index) => {
        let middle = !(index === 0 || index === menuItems.length - 1);

        return (
          <div
            className={`boxicon-container ${
              expanded && 'expanded-boxicon-container'
            }`}
            onMouseEnter={() => {
              if (middle) {
                setHovered(index);
              }
            }}
            onMouseLeave={() => {
              if (middle) {
                setHovered(null);
              }
            }}
            onClick={() => {
              if (middle) {
                setActive(index);
              }
              if (index === 0) {
                setExpanded(!expanded);
              }
            }}
            key={index}
          >
            <BoxIcon
              className={`${middle && 'boxicon'}
                      ${!middle && 'first-and-last-trash-fix'}
                      ${active === index && 'active'}`}
              size={changeSmall ? 'sm' : 'md'}
              name={item.iconName}
              color={hovered === index || active === index ? 'white' : item.color}
              animation={active === index && animate ? 'tada' : ''}
              rotate={item.rotate}
            />
            <p
              className={`description 
            ${expanded && 'show-description'}
            ${active === index && 'active-description'}`}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;