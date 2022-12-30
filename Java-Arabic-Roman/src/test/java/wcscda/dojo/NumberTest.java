package wcscda.dojo;

import junit.framework.TestCase;

public class NumberTest extends TestCase {
	public void testNumberEasy() throws Exception{
		assertEquals(1,Number.toArabic("I"));
		assertEquals(20,Number.toArabic("XX"));
		assertEquals(500,Number.toArabic("D"));
		assertEquals(25,Number.toArabic("XXV"));
	}
	
	public void testNumberLessEasy() throws Exception{
		assertEquals(9,Number.toArabic("IX"));
		assertEquals(4,Number.toArabic("IV"));
	}
	
	public void testFinal() {
		assertEquals(490,Number.toArabic("CDXC"));
	}
}
