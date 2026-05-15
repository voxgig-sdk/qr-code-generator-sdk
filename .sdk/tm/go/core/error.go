package core

type QrCodeGeneratorError struct {
	IsQrCodeGeneratorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewQrCodeGeneratorError(code string, msg string, ctx *Context) *QrCodeGeneratorError {
	return &QrCodeGeneratorError{
		IsQrCodeGeneratorError: true,
		Sdk:              "QrCodeGenerator",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *QrCodeGeneratorError) Error() string {
	return e.Msg
}
