import "./style.css"

const Form = () => (
    <form className="form ">
        <fieldset className="form__element form__fieldset">
            <article className="form__article">Kalkulator walut</article>

            <input placeholder="Wpisz kwotę" type="number" min="0" className="form__element" />
            <select name="waluta" className="form__element " >
                <option value="1">PLN</option>
                <option value="4.71">EUR</option>
                <option value="4.47">USD</option>
                <option value="5.51">GBP</option>
            </select>

            <p>
                <input name="number" type="number" min="0" readOnly className="form__element form__output " />
                <select name="waluta" className="form__element ">
                    <option value="1">PLN</option>
                    <option value="4.71">EUR</option>
                    <option value="4.47">USD</option>
                    <option value="5.51">GBP</option>
                </select>

            </p>
            <p className="form__paragraph">Kurs z dnia 07.05.2022r.</p>
        </fieldset>
    </form >
)

export default Form;