/****** Object:  StoredProcedure [Production].[sp_GetProductWithoutImageByCompanyId]    Script Date: 3/1/2022 11:31:01 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <Author, , Name>
-- Create Date: <Create Date, , >
-- Description: <Description, , >
-- =============================================
ALTER PROCEDURE [Production].[sp_GetProductWithoutImageByCompanyId]
	@CompanyID  int
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON

    -- Insert statements for procedure here
    SELECT
		p.ProductId as ProductId,
		p.[Name] as ProductName,
		pc.CategoryId  as CategoryId,
		pc.[Name] as CategoryName,
		pc.CompanyId as CompanyId

	 from Production.Product p
	 left outer join Production.ProductCategory pc on p.CategoryId = pc.CategoryId
	 where pc.companyId = @CompanyId AND (p.[Name] IS NOT NULL AND LEN(p.[Name]) > 0) AND p.IsActive = 1 AND p.IsDeleted = 0 
	 AND (pc.[Name] IS NOT NULL AND LEN(pc.[Name]) > 0) AND pc.IsActive = 1 AND pc.IsDeleted = 0
	 ;
END
