package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewQrnEntityFunc func(client *QrCodeGeneratorSDK, entopts map[string]any) QrCodeGeneratorEntity

