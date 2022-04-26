import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({image, name, price, id}) => {
  return <Wrapper>
    <div className="container">
      <img src={image} alt={name} />
      <Link to={`/products/${id}`} className="link">
        <FaSearch/>
      </Link>
    </div>
    <footer>
      <h5>{name}</h5>
      <p>{formatPrice(price)}</p>
    </footer>
  </Wrapper>
}

const Wrapper = styled.article`
  border:1px solid var(--clr-primary-5);
  border-radius:var(--radius);
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius) var(--radius) 0 0;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius:5px 5px 0 0;
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    border-top:0;
    margin-top: 0px;
    padding:5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 600;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
