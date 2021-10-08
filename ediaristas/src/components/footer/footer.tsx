import React from "react";
import { FooterStyles } from './footer.style'
const FooterApp = () => {
    return (
        <FooterStyles>
            <footer id="footer">
                <div className="card">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h2 className="ml-5">Logotipo</h2>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Center</h5>
                                    <ul>
                                        <li className="text-center">
                                            <a href="">teste daksdhadhs  aisud ai</a>
                                        </li>
                                        <li className="text-center">
                                            <a href="">teste daksdhadhs  aisud ai</a>
                                        </li>
                                        <li className="text-center">
                                            <a href="">teste daksdhadhs  aisud ai</a>
                                        </li>
                                        <li className="text-center">
                                            <a href="">teste daksdhadhs  aisud ai</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h5 className="text-center">Formulário</h5>
                                    <hr />
                                    <input type="text" className="form-control mt-1 mb-1" />
                                    <input type="text" className="form-control mt-1 mb-1" />
                                    <button className="btn btn-danger text-center">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </FooterStyles>
    )
}



export default FooterApp