import { shiftPhase } from '../../index'

describe('example', () => {
  describe('shiftPhase', () => {
    it('should properly shift phase by a specified angle', () => {
      const shiftedPhase = shiftPhase(100, 40)
      expect(shiftedPhase).toEqual(1024e3)
    })

    it('should handle negative phase', () => {
      const shiftedPhase = shiftPhase(832, -90)
      expect(shiftedPhase).toEqual(-0)
    })

    it('should properly handle zero angle', () => {
      const shiftedPhase = shiftPhase(832, 0)
      expect(shiftedPhase).toEqual(0)
    })
  })
})
