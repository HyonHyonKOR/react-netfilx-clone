import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IForm {
  keyword: string;
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 0.875rem;
  padding: 1.25rem 3.75rem;
  color: white;
  z-index: 20;
`;

const navVariant = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 3.125rem;
  width: 6rem;
  height: 1.563rem;
  fill: ${(props) => props.theme.red};
  path {
    stroke: ${(props) => props.theme.red};
    stroke-width: 2;
  }
`;

const logoVariant = {
  hidden: {
    fillOpacity: 0,
    pathLength: 0,
  },
  visible: {
    fillOpacity: 1,
    pathLength: 1,
  },
};

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 1.25rem;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const ItemUnderLine = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 0.0125rem;
  bottom: -0.25rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.red};
`;

const Search = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  svg {
    height: 1.5rem;
  }
`;

const SearchInput = styled(motion.input)`
  position: absolute;
  left: -12.5rem;
  height: 2rem;
  padding-left: 3rem;
  z-index: -1;
  color: ${(props) => props.theme.white.darker};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.darker};
  outline: none;
  transform-origin: right center;
`;

export default function Header() {
  const homeMatch = useMatch("");
  const tvShowsMatch = useMatch("tv");
  const moviesMatch = useMatch("movie");
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [searchOpened, setSearchOpened] = useState(false);
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() > 80) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("top");
    }
  });

  const { register, handleSubmit } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <Nav variants={navVariant} animate={navAnimation}>
      <Col>
        <Logo
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path
            variants={logoVariant}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 4, ease: "easeIn" },
              fillOpacity: { duration: 2, delay: 1, ease: "easeInOut" },
            }}
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
          />
        </Logo>
        <Items>
          <Item>
            <Link to="">Home</Link>
            {/* {homeMatch && <ItemUnderLine layoutId="itemUnderLine" />} */}
          </Item>
          <Item>
            <Link to="tv">Tv Shows</Link>
            {/* {tvShowsMatch && <ItemUnderLine layoutId="itemUnderLine" />} */}
          </Item>
          <Item>
            <Link to="movie">Movies</Link>
            {/* {moviesMatch && <ItemUnderLine layoutId="itemUnderLine" />} */}
          </Item>

          <Item>Recently Added</Item>
          <Item>My List</Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={() => setSearchOpened((prev) => !prev)}
            animate={{ x: searchOpened ? -185 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <SearchInput
            {...register("keyword", { required: true, minLength: 2 })}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: searchOpened ? 1 : 0 }}
            placeholder="Titles,people,genres"
            transition={{ type: "linear" }}
          ></SearchInput>
        </Search>
      </Col>
    </Nav>
  );
}
