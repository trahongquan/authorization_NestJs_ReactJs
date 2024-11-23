// import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { memo } from "react";


export const LoginPage = () => {
    // const [textInput, setTextInput] = useState("");

    // const onAddBtnClick = () => {
        
    // }
    // const onTextInputChage = () => {
    //     setTextInput()
    // }

    return (
        <div>
            <div className="container d-flex flex-column justify-content-center">
                <Textfield placeholder="Username"
                            css={{"maxth-with" : "800px"}}
                            ></Textfield>
            </div>
            {/* <Textfield name="add-todo" placeholder="Thêm việc cần làm..."
                elemAfterInput={
                    <Button isDisabled={!textInput} // set giá trị bằng textInput
                    appearance="primary" onClick={onAddBtnClick}>
                        Thêm
                    </Button>
                    }
                    css={{padding: "4px"}}
                    value={textInput}
                    onChange={onTextInputChage}
                    ></Textfield> */}
        </div>
    )
}

export default memo(LoginPage)