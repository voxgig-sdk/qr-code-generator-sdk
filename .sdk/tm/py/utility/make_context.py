# QrCodeGenerator SDK utility: make_context

from core.context import QrCodeGeneratorContext


def make_context_util(ctxmap, basectx):
    return QrCodeGeneratorContext(ctxmap, basectx)
