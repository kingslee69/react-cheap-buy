import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: var(--mainBlue);

  .nav-link {
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--white70) !important;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 70%;
    }
  }
`;

export const TileWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card:hover {
      border: 0.044rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.123);
    }

    .card-footer:hover {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.8s linear;
  }

  &:hover {
    .card-img-top {
      transform: scale(1.25);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--white);
    font-size: 1.2rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  .img-container:hover {
    .cart-btn {
      transform: translate(0, 0);
    }
  }

  .cart-btn:hover {
    color: var(--mainBlue);
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  buttom: 0;
  background: ${props => (props.fake ? "rgba(0,0,0,0)" : "rgba(0, 0, 0, 0.3)")};
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--white);
    border-radius: 5px;
  }
`;
