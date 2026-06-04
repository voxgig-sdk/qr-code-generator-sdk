package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "QrCodeGenerator",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.apgy.in",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"qrn": map[string]any{},
			},
		},
		"entity": map[string]any{
			"qrn": map[string]any{
				"fields": []any{},
				"name": "qrn",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "TEXT",
											"kind": "query",
											"name": "data",
											"orig": "data",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 300,
											"kind": "query",
											"name": "size",
											"orig": "size",
											"reqd": true,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/qr/",
								"parts": []any{
									"qr",
								},
								"select": map[string]any{
									"exist": []any{
										"data",
										"size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
